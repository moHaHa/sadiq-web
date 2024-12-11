import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface DefaultLayout {}
const DefaultLayout: FC<DefaultLayout> = ({}) => {
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
export default DefaultLayout;
