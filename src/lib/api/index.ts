import axios, { AxiosError } from "axios";
import { ApiError, ApiErrorField, AppApi } from "@type/api";
import { ENV } from "@/lib/configs/environment";
import TokenService from "@lib/utils/tokenService";
import { toast } from "sonner";

const defaultHeaders = {
  "Content-type": "application/json",
};

const createRequestInstance = (addAuthHeader: boolean): AppApi => {
  const instance = axios.create({
    baseURL: ENV.apiBaseUrl,
    headers: defaultHeaders,
  });

  if (addAuthHeader) {
    instance.interceptors.request.use((request) => {
      request.headers["Authorization"] = `Bearer ${TokenService.accessToken}`;
      return request;
    });
  }
  instance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      console.error({ error }, "interceptors");
      const { response } = error;
      const { data, status } = response as {
        data?: { errors: ApiErrorField[]; message: string };
        status: number;
      };
      const errors = data?.errors || [];
      const message = data?.message || "Что-то пошло не так, попробуйте позже";
      toast(message, {
        closeButton: true,
        position: "top-right",
      });

      if (status === 401) {
        TokenService.logout();
        window.location.pathname = "/login";
        return;
      }

      // TODO: 403

      const apiError: ApiError = { message, status, errors };
      throw apiError;
    }
  );
  return instance as AppApi;
};

export const request = createRequestInstance(true);
export const noAuthRequest = createRequestInstance(false);
