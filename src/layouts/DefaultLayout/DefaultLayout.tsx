import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface FullLayout {}
const FullLayout: FC<FullLayout> = ({}) => {
	return (
		<div className='bg-[#eeeadf] min-h-100vh'>
			<Outlet></Outlet>
		</div>
	);
};
export default FullLayout;
