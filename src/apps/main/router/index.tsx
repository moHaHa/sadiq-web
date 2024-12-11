import { createBrowserRouter } from 'react-router-dom';
import { tokenLoader } from '~/helpers/auth';
import MainApp from '../MainApp';
import { mainRoutes } from '~/modules/main/routes';

export const mainRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainApp />,
		// loader: tokenLoader,
		// shouldRevalidate: () => false,
		children: [mainRoutes],
	},
]);
