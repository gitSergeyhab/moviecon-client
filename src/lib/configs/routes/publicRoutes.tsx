import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import appRoutes from "./routes";
import MainLayout from "@/layouts/main/MainLayout";
import { ErrorElement } from "@/components/ErrorElement";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { withSuspense } from "@/hocs/withSuspense";

const LoginPage = withSuspense(
  lazy(() => import("@/modules/auth/LoginPage/LoginPage"))
);
const RegisterPage = withSuspense(
  lazy(() => import("@/modules/auth/RegisterPage/RegisterPage"))
);
const AboutPage = withSuspense(
  lazy(() => import("@/modules/AboutPage/AboutPage"))
);
const MainPage = withSuspense(
  lazy(() => import("@/modules/MainPage/MainPage"))
);

const publicRoutes: RouteObject[] = [
  {
    path: appRoutes.auth.login,
    element: <LoginPage />,
  },
  {
    path: appRoutes.auth.register,
    element: <RegisterPage />,
  },
  {
    path: appRoutes.main,
    element: <MainPage />,
  },
  {
    path: appRoutes.about,
    element: <AboutPage />,
  },
];

export const publicRoute: RouteObject = {
  path: "/",
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: publicRoutes,
};
