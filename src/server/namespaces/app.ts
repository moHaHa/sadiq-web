export namespace TApp {
  export interface IDataResponse<T> {
    data: T;
    totalRecords?: number;
  }
  export interface IParamsBase {
    skip?: number;
    limit?: number;
  }
}
