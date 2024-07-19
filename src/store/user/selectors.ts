import { RootState } from "../";

export const getUser = (state: RootState) => state.auth.user;
export const getUserStatus = (state: RootState) => state.auth.status;
export const getUserError = (state: RootState) => state.auth.error;
