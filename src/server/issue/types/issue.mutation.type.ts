import { IssueType } from "~/server/types/issueType.type";

interface IIssueMutation {
  text: string;
  type: IssueType;
  files: File[];
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
