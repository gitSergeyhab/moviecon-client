import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "@/type/user";
import { initialState } from "./const";
import { LoadingStatus } from "@/type/ui";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserInfo>) {
      state.user = payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setLoadingStatus(state, { payload }: PayloadAction<LoadingStatus>) {
      state.status = payload;
    },
  },
});

export const { clearUser, setUser, setLoadingStatus } = authSlice.actions;

export default authSlice;
