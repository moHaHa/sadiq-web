import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { TZoneItem, zoneQueryKey } from '../types';

export function useZoneByIdQuery(id: string, options?: UseQueryOptions<TZoneItem, HttpError>) {
	const key = [zoneQueryKey, id];
	return useQuery<TZoneItem, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TZoneItem>>(`/zone/${id}`).then(({ data }) => data.data),
		options
	);
}

export function invalidateZoneByIdQuery(id: string) {
	return queryClient.invalidateQueries([zoneQueryKey, id]);
}
