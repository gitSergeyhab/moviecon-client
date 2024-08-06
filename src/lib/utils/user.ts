import { store } from "@/store";
import { UserRole } from "@/type/user";
import TokenService from "./storage-services/tokenService";
import { userActions, userSelectors } from "@/store/user";

export const logout = () => {
  store.dispatch(userActions.clearUser());
  TokenService.logout();
};

export const checkAccess = (allowedRoles?: UserRole[] | UserRole): boolean => {
  const user = userSelectors.getUser(store.getState());
  if (!allowedRoles || !allowedRoles.length) return true;
  if (typeof allowedRoles === "string") return user?.role === allowedRoles;
  return !!user?.role && (!allowedRoles || allowedRoles.includes(user?.role));
};
