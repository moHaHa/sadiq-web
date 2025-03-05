import { RouteObject } from 'react-router-dom';

export type PageLayout = 'full' | 'home';

export type PageRouteConfiguration = {
	path: string | ((...args: any[]) => string);
	customPath?: object;
	funcDefaultArgs?: readonly string[];
	component: React.ReactNode;
	layout?: PageLayout;
};
export type LayoutRouteConfiguration = {
	path: string;
	type: PageLayout;
	component: React.ReactNode;
	children: RouteObject[];
};

export type RoutesConfigMap<T extends string> = Record<T, PageRouteConfiguration>;
