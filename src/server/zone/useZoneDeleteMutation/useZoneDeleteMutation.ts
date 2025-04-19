import { UseMutationOptions, useMutation } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import http, { HttpError } from '~/services/httpService';
import { zoneQueryKey } from '../types';

export function useZoneDeleteMutation(options?: UseMutationOptions<boolean, HttpError, string>) {
	return useMutation<boolean, HttpError, string>(
		(id) =>
			http.delete<boolean>(`/zone/${id}`).then(({ data }) => {
				queryClient.invalidateQueries({ queryKey: [zoneQueryKey] });
				queryClient.invalidateQueries({ queryKey: [zoneQueryKey, id] });
				return data;
			}),
		options
	);
}
