import { UploadFile } from 'antd';

interface IIssueMutation {
	text: string;
	// type: IssueType;
	category: string;
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
