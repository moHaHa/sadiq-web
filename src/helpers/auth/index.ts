import { redirect } from 'react-router-dom';
import { routesByRole } from '~/apps/appRoutes';
import http from '~/services/httpService';
export type IUserRole = 'Admin' | 'User' | 'ReceiptScreen' | 'ReceiptAdmin';

export async function tokenLoader({ request }: { request: Request }) {
	const url = new URL(request.url);
	const path = url.pathname;
	const infoUser = await getAuthToken();
	if (!infoUser) {
		if (path !== '/login') return redirect('/login');
		return null;
	}
	const userRole: IUserRole = infoUser?.data?.role;
	const expectedPath = routesByRole[userRole];
	if (expectedPath && path !== expectedPath) {
		return redirect(expectedPath);
	}
	return infoUser;
}

export async function getAuthToken() {
	const token = localStorage.getItem('accessToken');
	if (!token) return null;
	return await getInfoUser();
}

export async function getInfoUser() {
	try {
		const res = await http.get('/api/User/GetCurrentInfo');
		if (res.status !== 200) {
			throw new Error('User Invalid');
		}
		return res.data;
	} catch (error) {
		localStorage.removeItem('accessToken');
		return null;
	}
}
