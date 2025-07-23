import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';

interface Zone {
	id: string;
	name: string;
	color: string;
}

interface Geofence {
	type: string;
	coordinates: number[][][];
}

interface GeofenceData {
	id: string;
	name: string;
	zone: Zone;
	geofence: Geofence;
	createdAt: string;
}

interface GeofencesMapViewProps {
	data?: GeofenceData[];
}

const GeofencesMapView: FC<GeofencesMapViewProps> = ({ data = [] }) => {
	const center =
		data.length > 0 && data[0].geofence.coordinates[0].length > 0
			? [data[0].geofence.coordinates[0][0][1], data[0].geofence.coordinates[0][0][0]]
			: [33.5138, 36.2765]; // Default to Damascus coordinates

	const getPolygonCenter = (coords: number[][][]) => {
		const points = coords[0];
		let latSum = 0;
		let lngSum = 0;
		points.forEach((point) => {
			latSum += point[1]; // latitude
			lngSum += point[0]; // longitude
		});
		return [latSum / points.length, lngSum / points.length];
	};
	return (
		<div className='rounded-14px overflow-hidden' style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
			<MapContainer center={center as L.LatLngExpression} zoom={12} style={{ height: '100%', width: '100%' }}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				{data.map((geofenceData) => {
					const centerCoords = getPolygonCenter(geofenceData.geofence.coordinates);
					const textColor = getContrastColor(geofenceData.zone.color); // (Optional) Ensure readability

					// Custom DivIcon for the text label
					const labelIcon = L.divIcon({
						html: `
                            <div style="
                                color: ${textColor};
                                background-color: ${geofenceData.zone.color};
                                padding: 2px 8px;
                                border-radius: 12px;
                                font-size: 12px;
                                font-weight: bold;
                                border: 2px solid ${geofenceData.zone.color};
                                white-space: nowrap;
                            ">
                                ${geofenceData.name}
                            </div>
                        `,
						className: '', // Remove default marker styles
						iconSize: [0, 0], // Let the HTML div size itself
					});

					return (
						<>
							<Polygon
								key={geofenceData.id}
								positions={geofenceData.geofence.coordinates[0].map((coord) => [coord[1], coord[0]])}
								pathOptions={{
									color: geofenceData.zone.color,
									fillOpacity: 0.2,
									weight: 2,
								}}
							>
								<Popup>
									<div>
										<h3>{geofenceData.name}</h3>
										<p>Zone: {geofenceData.zone.name}</p>
										<p>Created: {new Date(geofenceData.createdAt).toLocaleDateString()}</p>
									</div>
								</Popup>
							</Polygon>
							<Marker
								position={centerCoords as L.LatLngExpression}
								icon={labelIcon}
								interactive={false} // Disable click events on the label
							/>
						</>
					);
				})}
			</MapContainer>
		</div>
	);
};

// (Optional) Helper function to ensure text is readable on colored backgrounds
function getContrastColor(hexColor: string) {
	const r = parseInt(hexColor.slice(1, 3), 16);
	const g = parseInt(hexColor.slice(3, 5), 16);
	const b = parseInt(hexColor.slice(5, 7), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	return brightness > 128 ? '#000000' : '#FFFFFF';
}
export default GeofencesMapView;
