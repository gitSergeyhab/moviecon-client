import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./user/store";
import gameSlice from "./game/store";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [gameSlice.name]: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
