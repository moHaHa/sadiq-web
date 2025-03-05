import { UseMutationOptions, useMutation } from 'react-query';
import http, { HttpError } from '~/services/httpService';

export type TIssueActivityMutationMutation =
	| {
			action: 'comment';
			text: string;
	  }
	| {
			action: 'start';
			text: string;
	  }
	| {
			action: 'close';
			text: string;
	  }
	| {
			action: 'open';
			text: string;
	  }
	| {
			action: 'assign';
			text: string;
			users: string[];
	  }
	| {
			action: 'unassign';
			text: string;
			users: string[];
	  };

export function useIssueActivityMutationMutation(
	id: string,
	options?: UseMutationOptions<boolean, HttpError, TIssueActivityMutationMutation>
) {
	return useMutation<boolean, HttpError, TIssueActivityMutationMutation>(
		(body) => http.post<boolean>(`/issues/${id}/issue-activity`, body).then(({ data }) => data),
		options
	);
}
