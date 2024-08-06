import { UserInfo } from "@/type/user";
import { RootState } from "../";
import { LoadingStatus } from "@/type/ui";

export const getUser = (state: RootState): UserInfo | null => state.auth.user;
export const getUserStatus = (state: RootState): LoadingStatus =>
  state.auth.status;
export const getUserError = (state: RootState): string | null =>
  state.auth.error;
