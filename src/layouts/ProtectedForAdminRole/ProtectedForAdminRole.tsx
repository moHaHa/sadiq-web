import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';

interface ProtectedForAdminRoleProps {}

const ProtectedForAdminRole: FC<ProtectedForAdminRoleProps> = ({}) => {
	const { mine } = useAppWrapperContext();
	if (mine?.role != 'admin') {
		return <Navigate to={'/'}></Navigate>;
	}
	return <Outlet />;
};

export default ProtectedForAdminRole;
