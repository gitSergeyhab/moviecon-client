import { RouteObject } from "react-router-dom";
import appRoutes from "./routes";
import AdminPage from "@/modules/AdminPage/AdminPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import MainLayout from "@/layouts/main/MainLayout";
import { ErrorElement } from "@/components/ErrorElement";

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
