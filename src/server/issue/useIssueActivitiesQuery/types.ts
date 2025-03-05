import { TApp } from '~/server/namespaces/app';

export interface IIssueActivitiesParams extends TApp.IParamsBase {}

export type TIssueActivitiesSummary = {
	id: string;
	action: string;
	text: string;
	users: unknown[];
	createdBy: {
		id: string;
		email: string;
	};
	createdAt: string;
};
