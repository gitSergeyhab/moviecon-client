import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Mode = "onBlur" | "onSubmit";

type UseAppFormReturn<TSchema extends ZodSchema> = UseFormReturn<
  z.infer<TSchema>
>;

export const useAppForm = <TSchema extends ZodSchema>(
  schema: TSchema,
  defaultValues?: DefaultValues<z.TypeOf<TSchema>>,
  mode?: Mode
): UseAppFormReturn<TSchema> =>
  useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: mode || "onBlur",
  });
