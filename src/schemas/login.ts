import { z } from "zod";
import { formConstants } from "./const";

export const LoginSchema = z.object({
  email: z.string().email({ message: "введите корректный email" }),
  password: z
    .string()
    .min(formConstants.password.min, {
      message: `минимальная длина: ${formConstants.password.min}`,
    })
    .max(formConstants.password.max, {
      message: `максимальная длина: ${formConstants.password.max}`,
    }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
