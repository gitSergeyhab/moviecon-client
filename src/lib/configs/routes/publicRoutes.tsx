import { RouteObject } from "react-router-dom";
import appRoutes from "./routes";
import LoginPage from "@/modules/auth/LoginPage/LoginPage";
import RegisterPage from "@/modules/auth/RegisterPage/RegisterPage";
import AboutPage from "@/modules/AboutPage/AboutPage";
import MainLayout from "@/layouts/main/MainLayout";
import { ErrorElement } from "@/components/ErrorElement";
import MainPage from "@/modules/MainPage/MainPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";

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
