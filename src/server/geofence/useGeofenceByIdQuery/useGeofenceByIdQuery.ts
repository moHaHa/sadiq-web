import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { geofenceQueryKey } from '../types';
import { TGeofenceItem } from '../types/item';
export function useGeofenceByIdQuery(id: string, options?: UseQueryOptions<TGeofenceItem, HttpError>) {
	const key = [geofenceQueryKey, id];
	return useQuery<TGeofenceItem, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TGeofenceItem>>(`/geofence/` + id).then(({ data }) => data.data),
		options
	);
}

export function invalidateGeofenceByIdQuery(id: string) {
	return queryClient.invalidateQueries([geofenceQueryKey, id]);
}
