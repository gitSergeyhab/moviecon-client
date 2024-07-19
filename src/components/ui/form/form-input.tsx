import { UseFormReturn, Path } from "react-hook-form";
import { Input } from "../input";
import { AnyDict } from "@/type/dict";
import { cn } from "@/lib/utils/styles";

type InputType = "text" | "email" | "password";
export interface FormInputProps<T extends AnyDict> {
  form: UseFormReturn<T>;
  // options: RegisterOptions<T, Path<T>>;
  field: Path<T>;
  label?: string;
  className?: string;
  type?: InputType;
  placeholder?: string;
}

export const FormInput = <T extends AnyDict>({
  field,
  form,
  label,
  className,
  ...restProps
}: FormInputProps<T>) => {
  const { formState, register } = form;
  const error = formState.errors[field];

  return (
    <div className={cn("mb-2", className)}>
      {label ? (
        <label
          htmlFor={field as string}
          className="block font-bold text-sm mb-2"
        >
          {label}
        </label>
      ) : null}
      <Input
        {...restProps}
        {...register(field)}
        disabled={formState.isSubmitting}
      />
      <div className="text-red-800 font-bold text-sm mt-1 min-h-5">
        {error?.message as string}
      </div>
    </div>
  );
};
