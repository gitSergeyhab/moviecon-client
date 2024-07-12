// import { AnyDict } from "@/type/dict";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";
import { z, ZodSchema } from "zod";

// import { DefaultValues, useForm } from "react-hook-form";
// import { ZodObject, ZodType } from "zod";

type Mode = "onBlur" | "onSubmit";

// export const useAppForm = <T extends ZodType>(
//   schema: T,
//   initialValues?: T,
//   mode?: Mode
// ) => {
//   const form = useForm({
//     mode: mode || "onBlur",
//     defaultValues: initialValues as DefaultValues<T>,
//     resolver: zodResolver(schema),
//   });
//   return form;
// };

type UseAppFormReturn<TSchema extends ZodSchema> = UseFormReturn<
  z.infer<TSchema>
>;

export const useAppForm = <TSchema extends ZodSchema>(
  schema: TSchema,
  defaultValues?: DefaultValues<z.TypeOf<TSchema>>,
  mode?: Mode
  // options?: UseFormProps<z.infer<TSchema>>
): UseAppFormReturn<TSchema> =>
  useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: mode || "onBlur",
    // ...options,
  });
