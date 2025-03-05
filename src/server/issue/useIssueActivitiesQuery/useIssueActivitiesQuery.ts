import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { issueQueryKey } from '../types/key.query';
import { IIssueActivitiesParams, TIssueActivitiesSummary } from './types';

export function useIssueActivitiesQuery(
	issueId: string,
	params?: IIssueActivitiesParams,
	options?: UseQueryOptions<TApp.IDataResponse<TIssueActivitiesSummary[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [issueQueryKey, issueId, 'issue-activity', queryString];
	return useQuery<TApp.IDataResponse<TIssueActivitiesSummary[]>, HttpError>(
		key,
		() =>
			http
				.get<TApp.IDataResponse<TIssueActivitiesSummary[]>>(`/issues/${issueId}/issue-activity`)
				.then(({ data }) => data),
		options
	);
}

export function invalidateIssueActivitiesQuery(id: string) {
	return queryClient.invalidateQueries([issueQueryKey, id, 'issue-activity']);
}
