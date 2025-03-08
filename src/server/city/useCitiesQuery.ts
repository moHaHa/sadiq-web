import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import http, { HttpError } from '~/services/httpService';
import { TApp } from '../namespaces/app';

export const cityQueryKey = 'city';
export type TCitySummary = {
	id: string;
	name: string;
	nameAr: string;
};
interface ICityParams extends TApp.IParamsBase {
	name?: string;
	nameAr?: string;
}
export function useCitiesQuery(
	params?: ICityParams,
	options?: UseQueryOptions<TApp.IDataResponse<TCitySummary[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [cityQueryKey, queryString];
	return useQuery<TApp.IDataResponse<TCitySummary[]>, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TCitySummary[]>>('/cities?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateCitiesQuery() {
	return queryClient.invalidateQueries([cityQueryKey]);
}
