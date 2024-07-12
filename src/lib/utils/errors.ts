import { ApiError } from "@/type/api";
import { UseFormSetError, Path } from "react-hook-form";

type StringDict = Record<string, string>;

export const setFormErrors = <T extends StringDict>(
  e: ApiError,
  setError: UseFormSetError<T>
): void => {
  console.log({ e });
  const errors = (e as ApiError).errors;
  errors.forEach((err) => {
    setError(err.name as Path<T>, {
      type: "server",
      message: err.message,
    });
  });
};
