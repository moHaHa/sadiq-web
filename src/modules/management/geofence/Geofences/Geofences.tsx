import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteManger from '~/components/DeleteManger/DeleteManger';
import MainHeader from '~/components/MainHeader/MainHeader';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { adminViews } from '~/router';
import { invalidateGeofencesQuery, useGeofencesQuery } from '~/server/geofence/useGeofencesQuery/useGeofencesQuery';

interface GeofencesProps {}

const Geofences: FC<GeofencesProps> = ({}) => {
	const { skip, limit, pagination } = usePagination();
	const { data } = useGeofencesQuery({ total: true, skip, limit });
	const navigate = useNavigate();
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
							{
								title: '',
								dataIndex: 'actions',
								render: (_, record) => (
									<div className='flex gap-12px'>
										<Button
											onClick={() => {
												navigate(adminViews.GeofenceByIdEdit.path(record.id));
											}}
											icon={<EditOutlined></EditOutlined>}
										></Button>

										<DeleteManger
											entity='geofence'
											id={record.id}
											text='geofence'
											invalidateQuery={invalidateGeofencesQuery}
										/>
									</div>
								),
							},
						]}
						pagination={{
							...pagination,
							total: data?.totalRecords,
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
