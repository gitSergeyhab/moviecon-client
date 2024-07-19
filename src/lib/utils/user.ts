import { store } from "@/store";
import { clearUser } from "@/store/user/store";
import { UserRole } from "@/type/user";
import TokenService from "./tokenService";
import { getUser } from "@/store/user/selectors";

export const logout = () => {
  store.dispatch(clearUser());
  TokenService.logout();
};

export const checkAccess = (allowedRoles?: UserRole[] | UserRole): boolean => {
  const user = getUser(store.getState());
  if (!allowedRoles || !allowedRoles.length) return true;
  if (typeof allowedRoles === "string") return user?.role === allowedRoles;
  return !!user?.role && (!allowedRoles || allowedRoles.includes(user?.role));
};
