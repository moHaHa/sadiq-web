import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { TCategoryMutation } from '../types';

export function useCategoryMutation(
	options?: UseMutationOptions<boolean, HttpError, { id?: string; body: TCategoryMutation }>
) {
	return useMutation<boolean, HttpError, { id?: string; body: TCategoryMutation }>(
		({ id, body }) =>
			id
				? http.put<boolean>('/category/' + id, body).then(({ data }) => data)
				: http.post<boolean>('/category', body).then(({ data }) => data),
		options
	);
}
