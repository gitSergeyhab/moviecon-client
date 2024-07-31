import { AppDispatch, RootState } from "@store/index";

export type ThunkFn = (
  dispatch: AppDispatch,
  getStore: () => RootState
) => Promise<void>;
