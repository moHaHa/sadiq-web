import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface MainAppProps {}
const MainApp: FC<MainAppProps> = ({}) => {
	return <Outlet />;
};
export default MainApp;
