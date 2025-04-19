import { TApp } from '~/server/namespaces/app';

export const zoneQueryKey = 'zone';

export interface TZoneItem {
	id: string;
	name: string;
	color: string;
	createdAt: string;
	updatedAt: string;
}

export interface TZoneMutation {
	name: string;
	color: string;
}

export interface TZoneParams {
	name?: string;
}

export interface IZoneParams extends TApp.IParamsBase {
	name?: string;
}
