import { RouteObject } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import TestPage from './TestPage/TestPage';


export const mainRoutes: RouteObject = {
	path: '',
	element: <DefaultLayout />,
	children: [
		{
			path: '',
			element: <TestPage></TestPage>,
		},
		
	],
};
