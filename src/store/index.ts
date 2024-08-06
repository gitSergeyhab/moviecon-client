import { configureStore } from "@reduxjs/toolkit";
import { userReducer, userSliceName } from "./user";
import { recordsReducer, recordsSliceName } from "./records";
import { gameReducer, gameSliceName } from "./game";

export const store = configureStore({
  reducer: {
    [userSliceName]: userReducer,
    [recordsSliceName]: recordsReducer,
    [gameSliceName]: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
