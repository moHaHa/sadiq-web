import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = ({}) => {
	return <Outlet></Outlet>;
};

export default HomeLayout;
