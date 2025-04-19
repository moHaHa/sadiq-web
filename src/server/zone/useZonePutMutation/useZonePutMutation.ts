import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TZoneMutation } from '../types';

export function useZonePutMutation(options?: UseMutationOptions<boolean, HttpError, { id: string; body: TZoneMutation }>) {
	return useMutation<boolean, HttpError, { id: string; body: TZoneMutation }>(
		({ id, body }) => http.put<boolean>(`/zone/${id}`, body).then(({ data }) => data),
		options
	);
}
