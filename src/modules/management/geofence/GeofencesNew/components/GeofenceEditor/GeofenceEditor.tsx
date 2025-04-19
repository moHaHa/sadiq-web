import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';

interface GeofenceEditorProps {
	onChange: (value: any) => void;
}
const GeofenceEditor: React.FC<GeofenceEditorProps> = ({ onChange }) => {
	const [geoJson, setGeoJson] = useState<any>(null);

	useEffect(() => {
		const map = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors',
		}).addTo(map);

		const drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);

		const drawControl = new L.Control.Draw({
			edit: {
				featureGroup: drawnItems,
			},
			draw: {
				// polygon: true,
				polyline: false,
				rectangle: false,
				circle: false,
				marker: false,
				circlemarker: false,
			},
		});

		map.addControl(drawControl);

		map.on(L.Draw.Event.CREATED, (event: any) => {
			const { layer } = event;
			drawnItems.addLayer(layer);
			setGeoJson(drawnItems.toGeoJSON());
			onChange(drawnItems.toGeoJSON());
		});

		map.on(L.Draw.Event.EDITED, () => {
			setGeoJson(drawnItems.toGeoJSON());
			onChange(drawnItems.toGeoJSON());
		});

		map.on(L.Draw.Event.DELETED, () => {
			setGeoJson(drawnItems.toGeoJSON());
			onChange(drawnItems.toGeoJSON());
		});
	}, []);

	return (
		<div>
			<div id='map' style={{ height: '500px', width: '100%', direction: 'ltr' }}></div>
		</div>
	);
};

export default GeofenceEditor;
