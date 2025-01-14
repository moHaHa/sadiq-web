import { UseQueryOptions, useQuery } from "react-query";
import queryClient from "~/config/reactQuery/queryClient";
import { TApp } from "~/server/namespaces/app";
import { HttpError } from "~/services/httpService";
import { TIssueItem } from "../types/issue.item.type";
import { recordQueryKey } from "../types/key.query";
import { dummyIssues } from "../useIssuesQuery/dummy";

export function useIssueByIdQuery(
  id: string,
  options?: UseQueryOptions<TApp.IDataResponse<TIssueItem>, HttpError>
) {
  const key = [recordQueryKey, id];
  return useQuery<TApp.IDataResponse<TIssueItem>, HttpError>(
    key,
    () => httpGetIssueById(id),
    options
  );
}

export const httpGetIssueById = (id: string) =>
  // http
  //   .get<TApp.IDataResponse<TIssueSummary[]>>(`/issue?${queryString}`)
  //   .then(({ data }) => data);
  new Promise<TApp.IDataResponse<TIssueItem>>((resolve, reject) => {
    setTimeout(() => {
      const item = dummyIssues.find((e) => e.id == id);
      if (item) {
        resolve({ data: item });
      } else {
        reject();
      }
    }, 1000);
  });

export function invalidateIssuesQuery() {
  return queryClient.invalidateQueries([recordQueryKey]);
}
