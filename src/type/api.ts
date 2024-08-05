import { AxiosRequestConfig } from "axios";

type RequestMethods = "get" | "delete" | "options" | "head" | "request";

type RequestMethodsWithData = "post" | "put" | "patch";

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
}
export interface ApiResponse {
  data?: { errors: ApiErrorField[]; message: string };
  status: number;
}
export interface ApiError {
  errors: ApiErrorField[];
  status: number;
  message: string;
}
