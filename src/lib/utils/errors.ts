import { UseFormSetError, Path } from "react-hook-form";
import { ApiError, ApiResponse } from "@/type/api";
import { toastError } from "./toast";

type StringDict = Record<string, string>;

export const setFormErrors = <T extends StringDict>(
  e: ApiError,
  setError: UseFormSetError<T>
): void => {
  const errors = (e as ApiError).errors;
  errors.forEach((err) => {
    setError(err.name as Path<T>, {
      type: "server",
      message: err.message,
    });
  });
};

export const getErrorMessage = (response: ApiResponse): string | null => {
  const { data, status } = response;
  if (data?.message) return data.message;
  const errors = data?.errors;
  if (errors?.length) return errors.join(" ,");
  if (status === 404) return "Данного ресурса не существует";
  if (status === 401) return "Ошибка авторизации";
  if (status === 403) return "Доступ запрещен";
  if (status === 500) return "Внутренняя ошибка сервера";
  return null;
};

export const handledRequest =
  <T, ARGS>(
    requestFn: (...args: ARGS[]) => Promise<T>,
    title: string,
    returnValue: T
  ) =>
  async (...args: Parameters<typeof requestFn>) => {
    return requestFn(...args).catch((e) => {
      const errors = getErrorMessage(e as ApiError);
      toastError(errors || title);
      return returnValue;
    });
  };
