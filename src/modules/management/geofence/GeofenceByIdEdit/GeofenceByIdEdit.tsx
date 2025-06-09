import { Spin } from 'antd';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { convertGeofenceItemToMutation } from '~/server/geofence/helper/convertGeofenceItemToMutation';
import { useGeofenceByIdQuery } from '~/server/geofence/useGeofenceByIdQuery/useGeofenceByIdQuery';
import UpsertGeofence from '../GeofencesNew/UpsertGeofence';

interface GeofenceByIdEditProps {}

const GeofenceByIdEdit: FC<GeofenceByIdEditProps> = ({}) => {
	const { id } = useParams();
	const { isLoading, data } = useGeofenceByIdQuery(id as string);

	const initialValues = useMemo(() => {
		if (data != undefined) {
			return convertGeofenceItemToMutation(data);
		} else {
			return undefined;
		}
	}, [data]);
	return (
		<div>
			<MainHeader></MainHeader>
			{isLoading ? <Spin></Spin> : <UpsertGeofence initialValues={initialValues} id={id}></UpsertGeofence>}
		</div>
	);
};

export default GeofenceByIdEdit;
