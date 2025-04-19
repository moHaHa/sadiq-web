import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TZoneMutation } from '../types';

export function useZoneMutation(options?: UseMutationOptions<boolean, HttpError, TZoneMutation>) {
	return useMutation<boolean, HttpError, TZoneMutation>(
		(body) => http.post<boolean>('/zones', body).then(({ data }) => data),
		options
	);
}
