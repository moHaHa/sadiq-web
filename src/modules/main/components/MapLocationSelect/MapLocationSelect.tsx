import { FC, useEffect, useRef, useState } from 'react';

interface MapLocationSelectProps {
	value?: { lng: number; lat: number };
	onChange?: (value: { lng: number; lat: number }) => void;
}

const MapLocationSelect: FC<MapLocationSelectProps> = ({ onChange, value }) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const marker = useRef<google.maps.marker.AdvancedMarkerElement>();

	useEffect(() => {
		// Load the Google Maps script
		const loadGoogleMapsScript = () => {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
			script.async = true;
			script.onload = initializeMap;
			document.body.appendChild(script);
		};

		// Initialize the map
		const initializeMap = async () => {
			if (mapRef.current) {
				const position = { lat: 33.51523954533201, lng: 36.2717525114952 };
				const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
				const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

				const newMap = new Map(mapRef.current as HTMLElement, {
					zoom: 7,
					center: position,
					mapId: 'DEMO_MAP_ID',
					disableDefaultUI: true,
				});

				// add init marker
				if (value != undefined) {
					const exMarker = new AdvancedMarkerElement({
						map: newMap,
						position: value,
					});
					marker.current = exMarker;
				}
				newMap.addListener('dblclick', (e: google.maps.MapMouseEvent) => {
					if (!e.latLng) return;
					if (marker.current != undefined) {
						marker.current.position = e.latLng;
					} else {
						const newMarker = new AdvancedMarkerElement({
							map: newMap,
							position: e.latLng,
						});
						marker.current = newMarker;
					}
					onChange?.(e.latLng.toJSON());
				});
				setMap(newMap);
			}
		};

		// Check if the Google Maps object is already loaded
		if (!window.google || !window.google.maps) {
			loadGoogleMapsScript();
		} else {
			initializeMap();
		}
	}, []);

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '46vh',
				borderRadius: '12px',
				boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', // Improved mobile styling
			}}
		></div>
	);
};

export default MapLocationSelect;
