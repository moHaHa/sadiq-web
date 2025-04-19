import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TGeofenceMutation } from '../types/mutation';

export function useGeofenceMutation(options?: UseMutationOptions<boolean, HttpError, TGeofenceMutation>) {
	return useMutation<boolean, HttpError, TGeofenceMutation>(
		(body) => http.post<boolean>(`/geofence`, body).then(({ data }) => data),
		options
	);
}
