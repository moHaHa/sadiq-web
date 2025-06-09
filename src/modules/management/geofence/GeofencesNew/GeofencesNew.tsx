import { FC } from 'react';
import MainHeader from '~/components/MainHeader/MainHeader';
import UpsertGeofence from './UpsertGeofence';

interface GeofencesNewProps {}

const GeofencesNew: FC<GeofencesNewProps> = ({}) => {
	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<UpsertGeofence />
			</div>
		</>
	);
};

export default GeofencesNew;
