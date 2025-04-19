import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TGeofenceMutation } from '../types/mutation';

export function useGeofencePutMutation(
	options?: UseMutationOptions<boolean, HttpError, { id: string; body: TGeofenceMutation }>
) {
	return useMutation<boolean, HttpError, { id: string; body: TGeofenceMutation }>(
		({ id, body }) => http.put<boolean>(`/geofence/` + id, body).then(({ data }) => data),
		options
	);
}
