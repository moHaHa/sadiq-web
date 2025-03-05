import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';

export type TIssueItem = {
	id: string;
	text: string;
	type: IssueType;
	files?: string[];
	location?: LocationTIssueItem;
	governorate: {
		id: string;
		name: string;
		nameAr: string;
	};
	city: {
		id: string;
		name: string;
		nameAr: string;
	};
	status: IssueStatus;
	createdAt: string;
};

/**
 * Down Type Are Deps for Up
 */

export type LocationTIssueItem = {
	lat: number;
	lng: number;
};
