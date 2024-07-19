import { UseFormSetError, Path } from "react-hook-form";
import { ApiError } from "@/type/api";

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
