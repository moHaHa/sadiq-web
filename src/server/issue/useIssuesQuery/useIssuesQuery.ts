import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { TIssueParams } from '../types/issue.params.type';
import { TIssueSummary } from '../types/issue.summary.type';
import { issueQueryKey } from '../types/key.query';

export function useIssuesQuery(
	isPublic: boolean,
	params?: TIssueParams,
	options?: UseQueryOptions<TApp.IDataResponse<TIssueSummary[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [issueQueryKey, queryString];
	return useQuery<TApp.IDataResponse<TIssueSummary[]>, HttpError>(key, () => httpGetIssues(isPublic, queryString), options);
}

export const httpGetIssues = (isPublic: boolean, queryString: string = '') =>
	http
		.get<TApp.IDataResponse<TIssueSummary[]>>(`/issues${isPublic ? '/public' : ''}?${queryString}`)
		.then(({ data }) => data);
// new Promise<TApp.IDataResponse<TIssueSummary[]>>((resolve) => {
//   setTimeout(() => {
//     resolve({ data: dummyIssues, totalRecords: 4 });
//   }, 1000);
// });

export function invalidateIssuesQuery() {
	return queryClient.invalidateQueries([issueQueryKey]);
}
