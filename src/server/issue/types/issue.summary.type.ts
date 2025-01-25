import { IssueStatus } from "~/server/types/issueStatus.type";
import { IssueType } from "~/server/types/issueType.type";
import { LocationTIssueItem } from "./issue.item.type";

export type TIssueSummary = {
  id: string;
  text: string;
  type: IssueType;
  location?: LocationTIssueItem;

  status: IssueStatus;
  createdAt: string;
};
