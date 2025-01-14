import { UseQueryOptions, useQuery } from "react-query";
import queryClient from "~/config/reactQuery/queryClient";
import { objectToQueryString } from "~/helpers";
import { TApp } from "~/server/namespaces/app";
import { HttpError } from "~/services/httpService";
import { TIssueParams } from "../types/issue.params.type";
import { TIssueSummary } from "../types/issue.summary.type";
import { recordQueryKey } from "../types/key.query";
import { dummyIssues } from "./dummy";

export function useIssuesQuery(
  params?: TIssueParams,
  options?: UseQueryOptions<TApp.IDataResponse<TIssueSummary[]>, HttpError>
) {
  const queryString = objectToQueryString(params);
  const key = [recordQueryKey, queryString];
  return useQuery<TApp.IDataResponse<TIssueSummary[]>, HttpError>(
    key,
    () => httpGetIssues(queryString),
    options
  );
}

export const httpGetIssues = (queryString: string = "") =>
  // http
  //   .get<TApp.IDataResponse<TIssueSummary[]>>(`/issue?${queryString}`)
  //   .then(({ data }) => data);
  new Promise<TApp.IDataResponse<TIssueSummary[]>>((resolve) => {
    setTimeout(() => {
      resolve({ data: dummyIssues, totalRecords: 4 });
    }, 1000);
  });

export function invalidateIssuesQuery() {
  return queryClient.invalidateQueries([recordQueryKey]);
}
