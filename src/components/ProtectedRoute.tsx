import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProtectedRolesRoute } from "./ProtectedRoleRoute";
import { UserRole } from "@/type/user";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchUser } from "@/store/user/thunks";
import { getUser, getUserStatus } from "@/store/user/selectors";

export interface ProtectedRouteProps extends PropsWithChildren {
  roles?: UserRole[] | UserRole;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  roles,
}) => {
  const user = useSelector(getUser);
  const status = useSelector(getUserStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(navigate));
    }
  }, []);

  if (status === "loading" || status === "idle") {
    return <h1>Loading...</h1>;
  }

  return <ProtectedRolesRoute roles={roles}>{children}</ProtectedRolesRoute>;
};
