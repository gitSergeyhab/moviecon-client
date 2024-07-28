import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/store";
import gameSlice from "./game/store";
import { recordSlice } from "./records/store";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [recordSlice.name]: recordSlice.reducer,
    [gameSlice.name]: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
