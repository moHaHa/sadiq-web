import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { IZoneParams, TZoneItem, zoneQueryKey } from '../types';

export function useZonesQuery(params: IZoneParams, options?: UseQueryOptions<TApp.IDataResponse<TZoneItem[]>, HttpError>) {
	const queryString = objectToQueryString(params);
	const key = [zoneQueryKey, queryString];
	return useQuery<TApp.IDataResponse<TZoneItem[]>, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TZoneItem[]>>('/zone?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateZonesQuery() {
	return queryClient.invalidateQueries([zoneQueryKey]);
}
