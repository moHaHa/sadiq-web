import Two from './Two/Two';

export const unAuthModuleRouteKey = '/un-auth-module' as const;

export const unAuthModuleRoutesConfigurations = {
	One: {
		path: `${unAuthModuleRouteKey}/one`,
		component: <Two />,
		layout: 'full',
	},
} as const;
