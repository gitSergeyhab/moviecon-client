import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "@/type/user";
import { fetchUser } from "./thunks";
import { initialState } from "./const";

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка загрузки данных пользователя";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.error = null;
      });
  },
});

export const { clearUser, setUser } = authSlice.actions;

export default authSlice;
