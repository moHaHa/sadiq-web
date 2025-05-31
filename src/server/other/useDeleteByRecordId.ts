import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export function useDeleteByRecordIdMutation(id: string, entity: string, options?: UseMutationOptions<HttpError>) {
	return useMutation(() => http.delete(`/${entity}/${id}`).then((res) => res.data), options);
}

export default useDeleteByRecordIdMutation;
