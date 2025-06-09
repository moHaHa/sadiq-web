import { TGeofenceItem } from '../types/item';
import { TGeofenceMutation } from '../types/mutation';

export const convertGeofenceItemToMutation = (item: TGeofenceItem): TGeofenceMutation => {
	return {
		name: item.name,
		zone: item.zone.id,
		geofence: item.geofence,
	};
};
