import { RouteObject } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
// import AddIssuePage from "./AddIssuePage/AddIssuePage";
import BrowsePage from './BrowsePage/BrowsePage';
import Dashboard from './Dashboard/Dashboard';
import Issues from './Issues/Issues';
import Loading from './Loading/Loading';
import MapPage from './MapPage/MapPage';

export const mainRoutes: RouteObject = {
	path: '',
	element: <DefaultLayout />,
	children: [
		{
			path: '/dashboard',
			element: <Dashboard></Dashboard>,
		},
		{
			path: 'loading',
			element: <Loading></Loading>,
		},
		{
			path: 'map',
			element: <MapPage></MapPage>,
		},
		{
			path: 'browse',
			element: <BrowsePage></BrowsePage>,
		},
		// {
		//   path: "add-issue",
		//   element: <AddIssuePage></AddIssuePage>,
		// },
		{
			path: 'issues',
			element: <Issues></Issues>,
		},
	],
};
