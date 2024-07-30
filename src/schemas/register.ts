import { z } from "zod";
import { formConstants } from "./const";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(formConstants.name.min, {
        message: `минимальная длина: ${formConstants.name.min}`,
      })
      .max(formConstants.name.max, {
        message: `максимальная длина: ${formConstants.name.max}`,
      }),
    email: z.string().email({ message: "введите корректный email" }),
    password: z
      .string()
      .min(formConstants.password.min, {
        message: `минимальная длина: ${formConstants.password.min}`,
      })
      .max(formConstants.password.max, {
        message: `максимальная длина: ${formConstants.password.max}`,
      }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "пароли должны совпадать",
    path: ["repeatPassword"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
