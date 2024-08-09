import axios from "axios";
import TokenService from "../utils/storage-services/tokenService";
import { handledRequest } from "../utils/errors";
import { UserTokens } from "@/type/user";
import { ENV } from "../configs/environment";

const requestTokens$ = (refresh: string): Promise<{ data: UserTokens }> =>
  axios.post(`${ENV.apiBaseUrl}/auth/refresh-tokens/`, { refresh });

const requestTokens = handledRequest(
  requestTokens$,
  "не возможно обновить токены, попробуйте войти через логин",
  null
);

export const refreshToken = async (): Promise<UserTokens | null> => {
  const refresh = TokenService.refreshToken;
  if (!refresh) {
    console.error("refresh token не найден");
    return null;
  }
  const response = await requestTokens(refresh);
  if (!response) return null;
  return response.data;
};
