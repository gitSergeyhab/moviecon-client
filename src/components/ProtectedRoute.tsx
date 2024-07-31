import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
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
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, []);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <ProtectedRolesRoute user={user} roles={roles}>
      {children}
    </ProtectedRolesRoute>
  );
};
