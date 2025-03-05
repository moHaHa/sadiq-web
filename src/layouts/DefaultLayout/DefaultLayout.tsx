import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface FullLayout {}
const FullLayout: FC<FullLayout> = ({}) => {
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
export default FullLayout;
