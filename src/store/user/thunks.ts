import { ThunkFn } from "@type/store";
import TokenService from "@/lib/utils/storage-services/tokenService";
import { requestUser$ } from "@/lib/api/auth";
import { userActions } from "./";

export const fetchUser = (): ThunkFn => async (dispatch) => {
  const token = TokenService.accessToken;
  if (!token) return;
  try {
    dispatch(userActions.setLoadingStatus("loading"));
    const user = await requestUser$();
    dispatch(userActions.setUser(user));
    dispatch(userActions.setLoadingStatus("success"));
  } catch (e) {
    dispatch(userActions.setLoadingStatus("failed"));
  }
};
