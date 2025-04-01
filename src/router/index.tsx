import { createBrowserRouter, Outlet } from 'react-router-dom';
import { default as FullLayout } from '~/layouts/DefaultLayout/DefaultLayout';
import HomeLayout from '~/layouts/HomeLayout/HomeLayout';
import ProtectedForAdminRole from '~/layouts/ProtectedForAdminRole/ProtectedForAdminRole';
import { feedRoutesConfigurations } from '~/modules/feed/routesConfigurations.module';
import { managementRoutesConfigurations } from '~/modules/management/routesConfigurations.module';
import { getRouteTree } from './helpers';
import { LayoutRouteConfiguration } from './types';

export const publicViews = {
	...feedRoutesConfigurations,
} as const;

export const adminViews = {
	...managementRoutesConfigurations,
} as const;
// export const adminViews = {
// 	...unAuthModuleRoutesConfigurations,
// } as const;

const authLayouts: LayoutRouteConfiguration[] = [
	{
		path: '/',
		type: 'home',
		component: <HomeLayout />,
		children: [],
	},
	{
		path: '/',
		type: 'full',
		component: <FullLayout />,
		children: [],
	},
];

const publicViewsRoutes = getRouteTree(authLayouts, publicViews);
const adminViewsRoutes = getRouteTree(authLayouts, adminViews);
// const unAuth2edLevelChildren = getRouteTree(unAuthLayouts, adminViews);

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			...publicViewsRoutes,

			{
				path: '',
				element: <ProtectedForAdminRole></ProtectedForAdminRole>,
				children: [...adminViewsRoutes],
			},
			{
				path: ':all',
				element: <div>404</div>,
			},
		],
	},
]);
// export const unAuthRouter = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Outlet />,
// 		children: [
// 			// ...unAuth2edLevelChildren,
// 			{
// 				path: ':all',
// 				element: <Navigate to={'/'} />,
// 			},
// 		],
// 	},
// ]);
