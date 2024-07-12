// const actionRole: Record<CanAction, UserRole[]> = {
//   checkBonuses: ['STUDENT'],
//   checkStudentHomeworks: ['STUDENT'],
//   checkTeacherHomeworks: ['TEACHER'],
//   checkCart: ['STUDENT'],
//   checkStudentCourses: ['STUDENT'],
//   checkTeacherCourses: ['TEACHER'],
//   checkCatalogMenuItem: ['STUDENT'],
//   checkCoursesMenuItem: ['STUDENT', 'TEACHER'],
//   checkSandboxMenuItem: ['STUDENT', 'TEACHER'],
//   checkMenuDivider: ['STUDENT'],
// };

export const logout = () => {
  store.dispatch(clearUser());
  TokenService.logout();
};

import { store } from "@/store";
import { clearUser } from "@/store/user/store";
import { UserRole } from "@/type/user";
import TokenService from "./tokenService";
import { getUser } from "@/store/user/selectors";

export const checkAccess = (allowedRoles?: UserRole[] | UserRole): boolean => {
  const user = getUser(store.getState());
  // const userRole = store.getState().auth.user?.role;
  if (!allowedRoles || !allowedRoles.length) return true;
  if (typeof allowedRoles === "string") return user?.role === allowedRoles;
  return !!user?.role && (!allowedRoles || allowedRoles.includes(user?.role));
};

// export const can = (action: CanAction): boolean =>
//   checkAccess(actionRole[action]);

// export const getRedirectRoute = (path: string): string => {
//   const roleRoute = redirectRoutes[path];
// //   const role = getUser(store.getState())?.role;
//   const route = role ? roleRoute[role] : undefined;
//   return route !== undefined ? route : path;
// };
