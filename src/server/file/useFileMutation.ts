import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export function useFileMutation(options?: UseMutationOptions<{ blobURL: string }, HttpError, { id: string }>) {
	return useMutation<{ blobURL: string }, HttpError, { id: string }>(({ id }) => httpGetFile(id), options);
}

export const httpGetFile = (id: string) =>
	http.get<File>(`/files/${id}`, { responseType: 'blob' }).then((res) => {
		return {
			blobURL: URL.createObjectURL(res.data),
		};
	});
