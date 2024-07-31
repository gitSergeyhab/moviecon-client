import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { UserInfo, UserRole } from "@/type/user";
import { checkAccess } from "@/lib/utils/user";
import appRoutes from "@/lib/configs/routes/routes";
import { redirectQueryKey } from "@/const/redirectQueryKey";

export interface ProtectedRolesRouteProps extends PropsWithChildren {
  roles?: UserRole[] | UserRole;
  user: UserInfo | null;
}

export const ProtectedRolesRoute: FC<ProtectedRolesRouteProps> = ({
  children,
  roles,
  user,
}) => {
  if (checkAccess(roles)) return children;
  if (!user) {
    const searchParams = new URLSearchParams(location.search);
    const backQuery =
      searchParams.get(redirectQueryKey) || location.pathname.slice(1);

    const redirect = backQuery
      ? `${appRoutes.auth.login}?${redirectQueryKey}=${backQuery}`
      : `${appRoutes.auth.login}`;

    return <Navigate to={redirect} replace />;
  }
  return <Navigate to={appRoutes.notFound} replace />;
};
