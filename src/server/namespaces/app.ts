export namespace TApp {
	export interface IDataResponse<T> {
		data: T;
		totalRecords?: number;
	}
	export interface IParamsBase {
		total?: boolean;
		skip?: number;
		limit?: number;
	}
}
