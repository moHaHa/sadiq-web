import { TApp } from '~/server/namespaces/app';

export interface IGeofenceParams extends TApp.IParamsBase {
	name: string;
	zone: string | string[];
}
