import { ThunkFn } from "@type/store";
import TokenService from "@/lib/utils/tokenService";
import { requestUser } from "@/lib/api/auth";
import { setLoadingStatus, setUser } from "./store";

export const fetchUser = (): ThunkFn => async (dispatch) => {
  const token = TokenService.accessToken;
  if (!token) return;
  try {
    dispatch(setLoadingStatus("loading"));
    const user = await requestUser();
    dispatch(setUser(user));
    dispatch(setLoadingStatus("success"));
  } catch (e) {
    dispatch(setLoadingStatus("failed"));
  }
};
