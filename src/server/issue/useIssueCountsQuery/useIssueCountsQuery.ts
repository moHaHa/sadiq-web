import { UseQueryOptions, useQuery } from 'react-query';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { issueQueryKey } from '../types/key.query';

export interface IIssueCounts {
	open: number;
	inProgress: number;
	closed: number;
}
export function useIssueCountsQuery(options?: UseQueryOptions<TApp.IDataResponse<IIssueCounts>, HttpError>) {
	const key = [issueQueryKey, 'counts'];
	return useQuery<TApp.IDataResponse<IIssueCounts>, HttpError>(
		key,
		() => http.get('/issues/counts').then((e) => e.data),
		options
	);
}
