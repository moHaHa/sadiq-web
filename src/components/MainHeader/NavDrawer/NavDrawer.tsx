import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, List, Space } from 'antd';
import { useTheme } from 'antd-style';
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { adminViews } from '~/router';
import tokenService from '~/services/tokenService';

interface MenuListProps {}

const NavDrawer: FC<MenuListProps> = ({}) => {
	const { mine } = useAppWrapperContext();
	const navigate = useNavigate();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	return (
		<>
			<Drawer
				open={open}
				onClose={() => setOpen(false)}
				placement='right'
				footer={
					<div>
						{mine ? (
							<Button
								type='link'
								onClick={() => {
									tokenService.logout();
									navigate('/login');
								}}
							>
								تسجيل الخروج <div className='i-solar:logout-2-linear'></div>
							</Button>
						) : (
							<Space>
								<Button type='link' onClick={() => navigate('/login')}>
									تسجيل دخول
								</Button>
								<Button type='link' disabled onClick={() => navigate('/register')}>
									إنشاء حساب
								</Button>
							</Space>
						)}
					</div>
				}
			>
				<List className='min-w-200px font-sans'>
					<List.Item>
						<div className='font-sans text-center'>صفحات المنصة</div>
					</List.Item>
					<List.Item>
						<Link to={'/'}>الرئيسية</Link>
					</List.Item>
					<List.Item>
						<Link to={'/zones'}>المحافظات</Link>
					</List.Item>
					<List.Item>
						<Link to={adminViews.Geofences.path}>المناطق الجغرافية</Link>
					</List.Item>
				</List>
			</Drawer>
			<Button onClick={() => setOpen(true)} size='small' type='text' icon={<MenuOutlined></MenuOutlined>}></Button>
		</>
	);
};

export default NavDrawer;
