import Geofences from './geofence/Geofences/Geofences';
import GeofencesNew from './geofence/GeofencesNew/GeofencesNew';

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
} as const;
