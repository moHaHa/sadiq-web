import { Spin } from 'antd';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { convertZoneItemToMutation } from '~/server/zone/helper/convertZoneItemToMutation';
import { useZoneByIdQuery } from '~/server/zone/useZoneByIdQuery/useZoneByIdQuery';
import UpsertZone from '../ZoneNew/components/UpsertZone';

interface ZoneByIdEditProps {}

const ZoneByIdEdit: FC<ZoneByIdEditProps> = ({}) => {
	const { id } = useParams();
	const { isLoading, data } = useZoneByIdQuery(id as string);

	const initialValues = useMemo(() => {
		if (data != undefined) {
			return convertZoneItemToMutation(data);
		} else {
			return undefined;
		}
	}, [data]);
	return (
		<div>
			<MainHeader></MainHeader>
			{isLoading ? <Spin></Spin> : <UpsertZone initialValues={initialValues} id={id}></UpsertZone>}
		</div>
	);
};

export default ZoneByIdEdit;
