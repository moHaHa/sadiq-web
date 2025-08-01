import Categories from './category/Categories/Categories';
import CategoryByIdEdit from './category/CategoryByIdEdit/CategoryByIdEdit';
import CategoryNew from './category/CategoryNew/CategoryNew';
import GeofenceByIdEdit from './geofence/GeofenceByIdEdit/GeofenceByIdEdit';
import Geofences from './geofence/Geofences/Geofences';
import GeofencesMapPage from './geofence/GeofencesMapPage/GeofencesMapPage';
import GeofencesNew from './geofence/GeofencesNew/GeofencesNew';
import ZoneByIdEdit from './zone/ZoneByIdEdit/ZoneByIdEdit';
import ZoneNew from './zone/ZoneNew/ZoneNew';
import Zones from './zone/Zones/Zones';

export const managementRouteKey = '/management' as const;

export const managementRoutesConfigurations = {
	Geofences: {
		path: `${managementRouteKey}/geofences`,
		component: <Geofences />,
		layout: 'full',
	},
	GeofencesNew: {
		path: `${managementRouteKey}/geofences/new`,
		component: <GeofencesNew />,
		layout: 'full',
	},
	GeofenceByIdEdit: {
		path: (id: string) => `${managementRouteKey}/geofences/${id}`,
		funcDefaultArgs: [':id'],
		component: <GeofenceByIdEdit />,
		layout: 'full',
	},
	GeofencesMapPage: {
		path: `${managementRouteKey}/geofences/map`,
		component: <GeofencesMapPage />,
		layout: 'full',
	},
	Zones: {
		path: `${managementRouteKey}/zones`,
		component: <Zones />,
		layout: 'full',
	},
	ZonesNew: {
		path: `${managementRouteKey}/zones/new`,
		component: <ZoneNew />,
		layout: 'full',
	},
	ZoneByIdEdit: {
		path: (id: string) => `${managementRouteKey}/zones/${id}`,
		funcDefaultArgs: [':id'],
		component: <ZoneByIdEdit />,
		layout: 'full',
	},
	Categories: {
		path: `${managementRouteKey}/categories`,
		component: <Categories />,
		layout: 'full',
	},
	CategoryNew: {
		path: `${managementRouteKey}/categories/new`,
		component: <CategoryNew />,
		layout: 'full',
	},
	CategoryByIdEdit: {
		path: (id: string) => `${managementRouteKey}/categories/${id}`,
		funcDefaultArgs: [':id'],
		component: <CategoryByIdEdit />,
		layout: 'full',
	},
} as const;
