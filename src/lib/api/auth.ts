import { UserLoginData, UserRegisterData, UserWithTokens } from "@type/user";
import { request } from "./";

const url = "/auth/";
const getUrl = (path: string) => `${url}${path}`;

export const requestRegister = async (
  userData: UserRegisterData
): Promise<UserWithTokens> => {
  const response = await request.post(getUrl(`register/`), userData);
  return response;
};

export const requestLogin = async (
  userData: UserLoginData
): Promise<UserWithTokens> => {
  const response = await request.post(getUrl(`login/`), userData);
  return response;
};

export const requestUser = async (): Promise<UserWithTokens> => {
  const response = await request.get(url);
  return response;
};
