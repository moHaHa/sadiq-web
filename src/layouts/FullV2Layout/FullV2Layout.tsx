import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface FullV2Layout {}
const FullV2Layout: FC<FullV2Layout> = ({}) => {
	return <Outlet></Outlet>;
};
export default FullV2Layout;
