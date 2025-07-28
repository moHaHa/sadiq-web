import Feed from './Feed/Feed';
import Home from './Home/Home';
import IssueNewByNormal from './IssueNewByNormal/IssueNewByNormal';
import Login from './Login/Login';

export const feedRoutesConfigurations = {
	Home: {
		path: '',
		component: <Home />,
		layout: 'home',
	},
	Feed: {
		path: '/feed',
		component: <Feed />,
		layout: 'home',
	},
	IssueNewByNormal: {
		path: '/issue/new',
		component: <IssueNewByNormal />,
		layout: 'full',
	},
	Login: {
		path: '/login',
		component: <Login />,
		layout: 'full-v2',
	},
} as const;
