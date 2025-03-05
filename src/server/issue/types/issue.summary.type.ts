import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';
import { LocationTIssueItem } from './issue.item.type';

export type TIssueSummary = {
	id: string;
	text: string;
	type: IssueType;
	location?: LocationTIssueItem;
	activityCount: number;
	governorate?: {
		id: string;
		name: string;
		nameAr: string;
	};
	files: FileTIssueSummary[];
	city?: {
		id: string;
		name: string;
		nameAr: string;
	};
	status: IssueStatus;
	createdAt: string;
};

/**
 * types
 */

export type FileTIssueSummary = {
	id: string;
	mimetype: 'image/jpeg' | unknown;
	originalname: string;
};
