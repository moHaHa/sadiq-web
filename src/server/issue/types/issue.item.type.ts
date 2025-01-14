import { IssueStatus } from "~/server/types/issueStatus.type";
import { IssueType } from "~/server/types/issueType.type";

export type TIssueItem = {
  id: string;
  text: string;
  type: IssueType;
  files?: string[];
  location?: LocationTIssueItem;
  status: IssueStatus;
  createdAt: string;
};

/**
 * Down Type Are Deps for Up
 */

export type LocationTIssueItem = {
  lat: number;
  lng: number;
  governorate: string;
  city: string;
};
