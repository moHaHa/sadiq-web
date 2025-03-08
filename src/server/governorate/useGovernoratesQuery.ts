import { UseQueryOptions, useQuery } from 'react-query';
import queryClient from '~/config/reactQuery/queryClient';
import { objectToQueryString } from '~/helpers';
import http, { HttpError } from '~/services/httpService';
import { TApp } from '../namespaces/app';

export const governorateQueryKey = 'governorate';
export type TGovernorateSummary = {
	id: string;
	name: string;
	nameAr: string;
};
interface IGovernorateParams extends TApp.IParamsBase {
	name?: string;
	nameAr?: string;
}
export function useGovernoratesQuery(
	params?: IGovernorateParams,
	options?: UseQueryOptions<TApp.IDataResponse<TGovernorateSummary[]>, HttpError>
) {
	const queryString = objectToQueryString(params);
	const key = [governorateQueryKey, queryString];
	return useQuery<TApp.IDataResponse<TGovernorateSummary[]>, HttpError>(
		key,
		() => http.get<TApp.IDataResponse<TGovernorateSummary[]>>('/governorates?' + queryString).then(({ data }) => data),
		options
	);
}

export function invalidateGovernoratesQuery() {
	return queryClient.invalidateQueries([governorateQueryKey]);
}
