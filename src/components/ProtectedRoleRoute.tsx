import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { UserRole } from "@/type/user";
import { checkAccess } from "@/lib/utils/user";

export interface ProtectedRolesRouteProps extends PropsWithChildren {
  roles?: UserRole[] | UserRole;
}

export const ProtectedRolesRoute: FC<ProtectedRolesRouteProps> = ({
  children,
  roles,
}) => {
  if (checkAccess(roles)) return children;
  return <Navigate to={"/not-found-page"} replace />;
};
