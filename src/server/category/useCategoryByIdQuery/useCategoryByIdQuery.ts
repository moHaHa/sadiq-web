import { useQuery, UseQueryOptions } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { categoryQueryKey, TCategoryItem } from '../types';

export function useCategoryByIdQuery(id: string, options?: UseQueryOptions<TCategoryItem, HttpError>) {
	const key = [categoryQueryKey, id];
	return useQuery<TCategoryItem, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TCategoryItem>>(`/category/${id}`).then(({ data }) => data.data),
		options
	);
}

export function invalidateCategoryByIdQuery(id: string) {
	return queryClient.invalidateQueries([categoryQueryKey, id]);
}
