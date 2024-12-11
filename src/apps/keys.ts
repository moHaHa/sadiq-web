import { AppKeyType } from './interfaces';

export const kdsAppKey: AppKeyType = 'kds';
export const supperAdminAppKey: AppKeyType = 'supper-admin';
export const main: AppKeyType = 'main';

export const activeAppKey: AppKeyType = ((import.meta.env.VITE_ACTIVE_APP_KEY as AppKeyType) ?? '').trim()
	? (import.meta.env.VITE_ACTIVE_APP_KEY as AppKeyType)
	: 'main';
