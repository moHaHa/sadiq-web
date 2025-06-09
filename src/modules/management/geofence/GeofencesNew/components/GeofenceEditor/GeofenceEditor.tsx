import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';

interface GeofenceEditorProps {
	onChange: (value: any) => void;
	value?: {
		type: string;
		coordinates: number[][][];
	};
}
const GeofenceEditor: React.FC<GeofenceEditorProps> = ({ onChange, value }) => {
	const initial = value
		? {
				features: [
					{
						geometry: value,
					},
				],
		  }
		: undefined;
	const [geoJson, setGeoJson] = useState<any>(initial);

	useEffect(() => {
		const initialCenter = value ? [...value?.coordinates[0][0]].reverse() : [33.517275, 36.303814];
		const map = L.map('map').setView(initialCenter as any, 13);

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
		{
			value != undefined &&
				L.geoJSON(
					{
						type: 'FeatureCollection',

						features: [
							{
								type: 'Feature',
								properties: {},
								geometry: value,
							},
						],
					} as any,
					{
						onEachFeature: function (feature, layer) {
							drawnItems.addLayer(layer);
						},
					}
				);
		}

		map.addControl(drawControl);

		map.on(L.Draw.Event.CREATED, (event: any) => {
			const { layer } = event;
			drawnItems.addLayer(layer);
			setGeoJson(drawnItems.toGeoJSON());
			onChange((drawnItems.toGeoJSON() as any).features.find((a: any, b: any) => b == 0)?.geometry);
		});

		map.on(L.Draw.Event.EDITED, () => {
			setGeoJson(drawnItems.toGeoJSON());
			onChange((drawnItems.toGeoJSON() as any).features.find((a: any, b: any) => b == 0)?.geometry);
		});

		map.on(L.Draw.Event.DELETED, () => {
			setGeoJson(drawnItems.toGeoJSON());
			onChange((drawnItems.toGeoJSON() as any).features.find((a: any, b: any) => b == 0)?.geometry);
		});
	}, []);

	return (
		<div>
			<div id='map' style={{ height: '80vh', width: '100%', direction: 'ltr' }}></div>
		</div>
	);
};

export default GeofenceEditor;
