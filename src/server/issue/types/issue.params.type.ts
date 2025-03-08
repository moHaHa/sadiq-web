import { TApp } from '~/server/namespaces/app';
import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';

interface IIssueParams extends TApp.IParamsBase {
	type?: IssueType[];
	status?: IssueStatus[];
	'createdAt[gte]'?: string;
	'createdAt[lte]'?: string;
	city?: string[];
	governorate?: string[];
	text?: string;
	publish?: boolean;
}

export type TIssueParams = IIssueParams;
