import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TIssueMutation } from '../types/issue.mutation.type';

export function useIssueMutation(options?: UseMutationOptions<boolean, HttpError, TIssueMutation>) {
	return useMutation<boolean, HttpError, TIssueMutation>(
		(body) => http.post<boolean>(`/issues`, body).then(({ data }) => data),
		options
	);
}
