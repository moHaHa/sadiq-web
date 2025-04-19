import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export function useGeofenceDeleteMutation(options?: UseMutationOptions<boolean, HttpError, { id: string }>) {
	return useMutation<boolean, HttpError, { id: string }>(
		({ id }) => http.delete<boolean>(`/geofence/` + id).then(({ data }) => data),
		options
	);
}
