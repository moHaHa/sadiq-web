import PageOneModule from './PageOneModule/PageOneModule';

export const moduleRouteKey = '/module' as const;

export const moduleRoutesConfigurations = {
	One: {
		path: `${moduleRouteKey}/one`,
		component: <PageOneModule />,
		layout: 'full',
	},
} as const;
