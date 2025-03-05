import { RouteObject } from 'react-router-dom';
import { LayoutRouteConfiguration, PageRouteConfiguration, RoutesConfigMap } from './types';

export const getValidPath = (pageKey: string, pageValue: PageRouteConfiguration) => {
	const { path, funcDefaultArgs } = pageValue;
	if (typeof path === 'string') {
		return path;
	} else if (typeof path === 'function') {
		if (funcDefaultArgs != undefined) {
			return path(...funcDefaultArgs);
		} else {
			throw Error(`invalid args path funcDefaultArgs for ${pageKey} in  RoutesConfigMap tree `);
		}
	} else {
		throw Error(`invalid path ${path as string}  ${pageKey} RoutesConfigMap tree`);
	}
};

export const getRouteTree = (
	layoutsConfigs: LayoutRouteConfiguration[],
	routesConfigurations: RoutesConfigMap<string>
): RouteObject[] => {
	const pages: PageRouteConfiguration[] = Object.values(routesConfigurations);
	for (let i = 0; i < layoutsConfigs.length; i++) {
		const layout = layoutsConfigs[i];
		for (let j = 0; j < pages.length; j++) {
			const { layout: pageLayout, component } = pages[j];
			const pageKey = Object.keys(routesConfigurations)[j];
			if (layout.type === pageLayout)
				layout.children.push({
					path: getValidPath(pageKey, pages[j]),
					element: component,
				});
		}
	}
	return layoutsConfigs.map(({ path, children, component }) => ({
		path,
		children,
		element: component,
	}));
};
