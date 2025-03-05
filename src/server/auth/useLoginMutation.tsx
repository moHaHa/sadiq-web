import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';
import { IAuthReponse } from './interfaces';

export type TLoginMutation = {
	email: string;
	password: string;
};

export function useLoginMutation(options?: UseMutationOptions<IAuthReponse, HttpError, TLoginMutation>) {
	return useMutation<IAuthReponse, HttpError, TLoginMutation>(
		(body) => http.post<IAuthReponse>(`/users/login`, body).then(({ data }) => data),
		options
	);
}
