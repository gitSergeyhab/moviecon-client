import { AxiosRequestConfig } from "axios";

type RequestMethods = "get" | "delete" | "options" | "head" | "request";

type RequestMethodsWithData = "post" | "put" | "patch";
//   | 'postForm'
//   | 'putForm'
//   | 'patchForm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestMethodsFn = <T = any, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataRequestMethodsFn = <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<T>;

export type AppApi = Record<RequestMethods, RequestMethodsFn> &
  Record<RequestMethodsWithData, DataRequestMethodsFn>;

export interface ApiErrorField {
  name: string;
  message: string;
  // detail: string;
  // code: string;
  // attr: string;
}
export interface ApiError {
  errors: ApiErrorField[];
  status: number;
  message: string;
}

// export interface ApiResponse<T = unknown> {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: T[];
// }

// export type QueryParams = Record<
//   string,
//   string | number | boolean | undefined | unknown[]
// >;

// export interface PaginationQueryParams {
//   limit: number;
//   offset: number;
// }

// export type Progress = (event: {
//   progress?: number;
//   estimate?: number;
// }) => void;
