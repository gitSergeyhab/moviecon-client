// import { EMAIL_PATTERN } from "@/const/patterns";
// import { Dict } from "@/type/dict";

// export type AuthFormFields = "email" | "name" | "password" | "repeatPassword";

// export const options: Record<
//   AuthFormFields,
//   Record<string, string | boolean | Dict>
// > = {
//   email: {
//     required: "Введите email",
//     pattern: {
//       value: EMAIL_PATTERN,
//       message: "Некорректный email",
//     },
//   },
//   name: {
//     required: "Введите имя",
//     minLength: { message: "Длина имени от 4 до 24 символов", value: 4 },
//     maxLength: {
//       message: "Длина имени от 4 до 24 символов",
//       value: 24,
//     },
//   },

//   password: {
//     required: "Введите пароль",
//     minLength: { message: "Длина пароля от 8 до 24 символов", value: 8 },
//     maxLength: {
//       message: "Длина пароля от 8 до 24 символов",
//       value: 24,
//     },
//   },

//   repeatPassword: {
//     required: "Повторите пароль",
//     minLength: { message: "Длина пароля от 8 до 24 символов", value: 8 },
//     maxLength: {
//       message: "Длина пароля от 8 до 24 символов",
//       value: 24,
//     },
//   },
// };
