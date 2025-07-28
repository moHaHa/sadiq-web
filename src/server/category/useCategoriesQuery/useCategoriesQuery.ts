import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { TCategoryItem, TCategoryParams, categoryQueryKey } from '../types';

export function useCategoriesQuery<T = TCategoryItem>(
	params?: TCategoryParams,
	options?: UseQueryOptions<TApp.IDataResponse<T[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [categoryQueryKey, queryString];
	return useQuery<TApp.IDataResponse<T[]>, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<T[]>>('/category?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateCategoriesQuery() {
	return queryClient.invalidateQueries([categoryQueryKey]);
}
