import L from 'leaflet';
import { FC, useEffect, useRef } from 'react';

interface MapLocationSelectProps {
	value?: { lng: number; lat: number };
	onChange?: (value: { lng: number; lat: number }) => void;
}

const MapLocationSelect: FC<MapLocationSelectProps> = ({ onChange, value }) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const markerRef = useRef<L.Marker | null>(null);

	useEffect(() => {
		if (!mapRef.current) return;

		// Set default position or use passed value
		const defaultPosition = value || { lng: 36.27175, lat: 33.51524 };

		// Create the Leaflet map
		const map = L.map(mapRef.current).setView([defaultPosition.lat, defaultPosition.lng], 7);

		// Add OpenStreetMap tile layer
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		// Place the initial marker if a value exists
		if (value) {
			markerRef.current = L.marker([value.lat, value.lng]).addTo(map);
		}

		// Handle double-click event to place the marker
		map.on('dblclick', (e) => {
			const { lat, lng } = e.latlng;

			if (markerRef.current) {
				markerRef.current.setLatLng([lat, lng]);
			} else {
				markerRef.current = L.marker([lat, lng]).addTo(map);
			}

			// Call onChange with new position
			onChange?.({ lat, lng });
		});

		// Clean up the map when the component is unmounted
		return () => {
			map.remove();
		};
	}, [value, onChange]);

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '46vh',
				borderRadius: '12px',
				boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', // Improved mobile styling
			}}
		/>
	);
};

export default MapLocationSelect;
