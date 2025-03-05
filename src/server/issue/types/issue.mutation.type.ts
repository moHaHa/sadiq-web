import { UploadFile } from 'antd';
import { IssueType } from '~/server/types/issueType.type';

interface IIssueMutation {
	text: string;
	type: IssueType;
	files: UploadFile[];
	location?: LocationTIssueMutation;
}

export type TIssueMutation = IIssueMutation;

/**
 * Down Type Are Deps for Up
 */
export type LocationTIssueMutation = {
	lat: number;
	lng: number;
};
