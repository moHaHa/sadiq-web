import { FC, useEffect } from 'react';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useLayoutContext } from '~/components/LayoutContent/LayoutContent';
import { mainRouter } from './router';

const MainAppProvider: FC = () => {

	const { user } = useLayoutContext();
	const unAuthRouter = createBrowserRouter([
		{
			path: '',
			element: <>foo</>,
		},
	
	]);
	return user ? <RouterProvider router={mainRouter} /> : <RouterProvider router={unAuthRouter} />;
};

export default MainAppProvider;
