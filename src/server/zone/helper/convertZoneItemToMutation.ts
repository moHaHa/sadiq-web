import { TZoneItem, TZoneMutation } from '../types';

export const convertZoneItemToMutation = (item: TZoneItem): TZoneMutation => {
	return {
		color: item.color,
		name: item.name,
	};
};
