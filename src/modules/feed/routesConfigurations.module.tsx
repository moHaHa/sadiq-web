import Feed from './Feed/Feed';
import IssueNewByNormal from './IssueNewByNormal/IssueNewByNormal';
import Login from './Login/Login';

export const feedRoutesConfigurations = {
	Feed: {
		path: '/',
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
		layout: 'full',
	},
} as const;
