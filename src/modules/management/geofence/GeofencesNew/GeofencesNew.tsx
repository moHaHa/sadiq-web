import { GeoJSONFeatureCollection } from 'ol/format/GeoJSON';
import { FC, useState } from 'react';
import MainHeader from '~/components/MainHeader/MainHeader';
import GeoJSONMapEditor from './components/GeofenceEditor/GeofenceEditor';

interface GeofencesNewProps {}

const GeofencesNew: FC<GeofencesNewProps> = ({}) => {
	const [geojson, setGeojson] = useState<GeoJSONFeatureCollection>({
		type: 'FeatureCollection',
		features: [],
	});

	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div>
					<div className='pt-60px fcc  '>
						<div className='h-70vh w-90vw '>
							<GeoJSONMapEditor
							// initialGeoJSON={geojson}
							// onGeoJSONChange={setGeojson}
							// mapCenter={[-74.006, 40.7128]} // New York
							// zoom={12}
							// drawType='Polygon'
							// allowModify={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GeofencesNew;
