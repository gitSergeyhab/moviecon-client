import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import appRoutes from "./routes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import MainLayout from "@/layouts/main/MainLayout";
import { ErrorElement } from "@/components/ErrorElement";
import { withSuspense } from "@/hocs/withSuspense";

const AdminPage = withSuspense(
  lazy(() => import("@/modules/AdminPage/AdminPage"))
);

const adminRoutes: RouteObject[] = [
  {
    path: appRoutes.admin,
    element: <AdminPage />,
  },
];

export const adminRoute: RouteObject = {
  path: "/",
  element: (
    <ProtectedRoute roles="ADMIN">
      <MainLayout />
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: adminRoutes,
};
