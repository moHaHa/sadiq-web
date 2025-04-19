import { Button, Table } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { adminViews } from '~/router';
import { useGeofencesQuery } from '~/server/geofence/useGeofencesQuery/useGeofencesQuery';

interface GeofencesProps {}

const Geofences: FC<GeofencesProps> = ({}) => {
	const { skip, limit, pagination } = usePagination();
	const { data } = useGeofencesQuery({ total: true, skip, limit });
	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div className='pt-70px'></div>
				<div className='plg'>
					<Table
						dataSource={data?.data ?? []}
						columns={[
							{
								title: 'Geofence',
								dataIndex: 'name',
							},
							{
								title: 'Zone',
								dataIndex: 'zone',
								render: (_, record) => record.zone.name,
							},
						]}
						pagination={{
							...pagination,
						}}
					></Table>
				</div>
				<div className=' plg'>
					<Link to={adminViews.GeofencesNew.path}>
						<Button type='primary' block>
							New Geofence
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Geofences;
