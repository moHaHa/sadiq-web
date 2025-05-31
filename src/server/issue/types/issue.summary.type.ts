import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';
import { LocationTIssueItem } from './issue.item.type';

export type TIssueSummary = {
	id: string;
	text: string;
	type: IssueType;
	location?: LocationTIssueItem;
	activityCount: number;
	geofence: {
		id: string;
		name: string;
	}[];
	zone: {
		id: string;
		name: string;
	}[];
	files: FileTIssueSummary[];
	publish: boolean;
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
