import { Path, UseFormReturn } from "react-hook-form";
import { Option } from "@/type/option";
import { AnyDict } from "@/type/dict";
import { cn } from "@/lib/utils/styles";
import { FormError } from "./form-error";

export interface FormInputProps<T extends AnyDict> {
  form: UseFormReturn<T>;
  field: Path<T>;
  className?: string;
  defaultValue?: string;
  options: Option[];
}

export const FormRadioGroup = <T extends AnyDict>({
  field,
  form,
  className,
  defaultValue,
  options,
}: FormInputProps<T>) => {
  const { formState, register } = form;
  const error = formState.errors[field];

  return (
    <div className={cn("px-8 pt-2 min-w-64", className)}>
      {options.map(({ label, value }) => (
        <div className="flex items-center me-4" key={value}>
          <input
            type="radio"
            value={value}
            id={value}
            defaultChecked={value === defaultValue}
            {...register(field)}
            className="relative float-left -ms-[1.5rem] me-2 my-1 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary transition-colors duration-300"
          />
          <label
            htmlFor={value}
            className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      ))}
      <FormError>{error?.message as string}</FormError>
    </div>
  );
};
