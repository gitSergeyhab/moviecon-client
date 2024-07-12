import { RootState } from "..";

// const getSliceState = (state: RootState) => state.auth

export const getUser = (state: RootState) => state.auth.user;
export const getUserStatus = (state: RootState) => state.auth.status;
export const getUserError = (state: RootState) => state.auth.error;
