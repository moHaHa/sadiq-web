import { TIssueParams } from "~/server/issue/types/issue.params.type";

export type TPreFilterType = {
  title: string;
  filter: TIssueParams;
};
