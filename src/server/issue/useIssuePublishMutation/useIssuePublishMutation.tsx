import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export type TIssuePublishMutation = {
	publish: boolean;
};

export function useIssuePublishMutation(id: string, options?: UseMutationOptions<boolean, HttpError, TIssuePublishMutation>) {
	return useMutation<boolean, HttpError, TIssuePublishMutation>(
		(body) => http.post<boolean>(`/issues/${id}/publish`, body).then(({ data }) => data),
		options
	);
}
