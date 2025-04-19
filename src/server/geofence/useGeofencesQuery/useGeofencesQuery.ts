import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers/objectToQueryString/objectToQueryString';
import { TApp } from '~/server/namespaces/app';
import http, { HttpError } from '~/services/httpService';
import { geofenceQueryKey } from '../types';
import { TGeofenceSummary } from '../types/item';
import { IGeofenceParams } from '../types/params';
export function useGeofencesQuery(
	params?: IGeofenceParams,
	options?: UseQueryOptions<TApp.IDataResponse<TGeofenceSummary[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [geofenceQueryKey, queryString];
	return useQuery<TApp.IDataResponse<TGeofenceSummary[]>, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TGeofenceSummary[]>>('/geofence?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateGeofencesQuery() {
	return queryClient.invalidateQueries([geofenceQueryKey]);
}
