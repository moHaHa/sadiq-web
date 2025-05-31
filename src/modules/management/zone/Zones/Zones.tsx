import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteManger from '~/components/DeleteManger/DeleteManger';
import MainHeader from '~/components/MainHeader/MainHeader';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { adminViews } from '~/router';
import { invalidateZonesQuery, useZonesQuery } from '~/server/zone/useZonesQuery/useZonesQuery';

interface ZonesProps {}

const Zones: FC<ZonesProps> = ({}) => {
	const { skip, limit, pagination } = usePagination();
	const { data } = useZonesQuery({ total: true, skip, limit });
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
								title: 'المنطقة',
								dataIndex: 'name',
							},
							{
								title: 'اللون',
								dataIndex: 'color',
								render: (color) => (
									<div className='w-10px h-10px rounded-full' style={{ backgroundColor: color }}></div>
								),
							},
							{
								title: '',
								dataIndex: 'actions',
								render: (_, record) => (
									<div className='flex gap-12px'>
										<Button
											onClick={() => {
												navigate(adminViews.ZoneByIdEdit.path(record.id));
											}}
											icon={<EditOutlined></EditOutlined>}
										></Button>
										<DeleteManger
											entity='zone'
											id={record.id}
											text='zone'
											invalidateQuery={invalidateZonesQuery}
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
					<Link
						to={
							adminViews.ZonesNew.path
							// '/'
						}
					>
						<Button type='primary' block>
							New Zone
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Zones;
