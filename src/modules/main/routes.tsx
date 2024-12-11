import { RouteObject } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import TestPage from './TestPage/TestPage';


export const mainRoutes: RouteObject = {
	path: 'main',
	element: <DefaultLayout />,
	children: [
		{
			path: 'foo',
			element: <>foo</>,
		},
		{
			path: 'test',
			element: <TestPage></TestPage>,
		},
		
	],
};
