import { UseMutationOptions, useMutation } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import http, { HttpError } from '~/services/httpService';

export function useFileMutation(
	isPublic: boolean,
	options?: UseMutationOptions<{ blobURL: string }, HttpError, { id: string }>
) {
	return useMutation<{ blobURL: string }, HttpError, { id: string }>(({ id }) => {
		const cashedData = queryClient.getQueryData<
			Promise<{
				blobURL: string;
			}>
		>(['useFileMutation', id]);
		if (cashedData != undefined) {
			return cashedData;
		} else {
			const data = httpGetFile(isPublic, id);
			queryClient.setQueryData(['useFileMutation', id], data);
			return data;
		}
	}, options);
}

export const httpGetFile = (isPublic: boolean, id: string) =>
	http.get<File>(`/files/${id}${isPublic ? '/public' : ''}`, { responseType: 'blob' }).then((res) => {
		return {
			blobURL: URL.createObjectURL(res.data),
		};
	});
