import { TApp } from '~/server/namespaces/app';

export const categoryQueryKey = 'category';

export interface TCategoryItem {
	id: string;
	name: string;
}

export interface TCategoryMutation {
	name: string;
}

export interface TCategoryParams extends TApp.IParamsBase {
	name?: string;
}
