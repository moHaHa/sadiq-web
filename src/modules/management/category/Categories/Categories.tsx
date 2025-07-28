import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteManger from '~/components/DeleteManger/DeleteManger';
import MainHeader from '~/components/MainHeader/MainHeader';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { adminViews } from '~/router';
import { invalidateCategoriesQuery, useCategoriesQuery } from '~/server/category/useCategoriesQuery/useCategoriesQuery';
import { httpLog } from '~/server/other/httpLog';

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
	const { skip, limit, pagination } = usePagination({ initialPage: 1, pageSize: 15 });
	const { data } = useCategoriesQuery({ total: true, skip, limit });
	const navigate = useNavigate();
	useEffect(() => {
		httpLog('Categories');
	}, []);
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
								title: '',
								dataIndex: 'actions',
								render: (_, record) => (
									<div className='flex gap-12px'>
										<Button
											onClick={() => {
												navigate(adminViews.CategoryByIdEdit.path(record.id));
											}}
											icon={<EditOutlined></EditOutlined>}
										></Button>
										<DeleteManger
											entity='category'
											id={record.id}
											text='category'
											invalidateQuery={invalidateCategoriesQuery}
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
							adminViews.CategoryNew.path
							// '/'
						}
					>
						<Button type='primary' block>
							New Category
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Categories;
