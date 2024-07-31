import { UserRole } from "@/type/user";
import {
  navMenuAdminItems,
  navMenuNoAuthItems,
  navMenuUserItems,
} from "./const";

export const getNavMenuItems = (role?: UserRole) => {
  switch (role) {
    case "ADMIN":
      return navMenuAdminItems;
    case "USER":
      return navMenuUserItems;
    default:
      return navMenuNoAuthItems;
  }
};
