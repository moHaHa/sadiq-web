import { UseMutationOptions, useMutation } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import http, { HttpError } from '~/services/httpService';
import { categoryQueryKey } from '../types';

export function useCategoryDeleteMutation(options?: UseMutationOptions<boolean, HttpError, string>) {
	return useMutation<boolean, HttpError, string>(
		(id) =>
			http.delete<boolean>(`/category/${id}`).then(({ data }) => {
				queryClient.invalidateQueries({ queryKey: [categoryQueryKey] });
				queryClient.invalidateQueries({ queryKey: [categoryQueryKey, id] });
				return data;
			}),
		options
	);
}
