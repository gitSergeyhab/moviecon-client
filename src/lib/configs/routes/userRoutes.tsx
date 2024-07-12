import { RouteObject } from "react-router-dom";
import appRoutes from "./routes";
import StatsPage from "@/modules/StatsPage/StatsPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ErrorElement } from "@/components/ErrorElement";
import MainLayout from "@/layouts/main/MainLayout";
import GamePage from "@/modules/GamePage/GamePage";

const userRoutes: RouteObject[] = [
  {
    path: appRoutes.game,
    element: <GamePage />,
  },
  {
    path: appRoutes.stats,
    element: <StatsPage />,
  },
];

export const userRoute: RouteObject = {
  path: "/",
  element: (
    <ProtectedRoute roles={["ADMIN", "USER"]}>
      <MainLayout />
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: userRoutes,
};
