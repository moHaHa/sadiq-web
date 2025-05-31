import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet';

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

	return (
		<div className='rounded-14px overflow-hidden' style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
			<MapContainer center={center as L.LatLngExpression} zoom={12} style={{ height: '100%', width: '100%' }}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				{data.map((geofenceData) => (
					<Polygon
						key={geofenceData.id}
						positions={geofenceData.geofence.coordinates[0].map((coord) => [coord[1], coord[0]])}
						pathOptions={{ color: geofenceData.zone.color }}
					>
						<Popup>
							<div>
								<h3>{geofenceData.name}</h3>
								<p>Zone: {geofenceData.zone.name}</p>
								<p>Created: {new Date(geofenceData.createdAt).toLocaleDateString()}</p>
							</div>
						</Popup>
					</Polygon>
				))}
			</MapContainer>
		</div>
	);
};

export default GeofencesMapView;
