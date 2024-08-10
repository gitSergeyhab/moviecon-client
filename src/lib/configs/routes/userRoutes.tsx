import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import appRoutes from "./routes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ErrorElement } from "@/components/ErrorElement";
import MainLayout from "@/layouts/main/MainLayout";
import { withSuspense } from "@/hocs/withSuspense";

const ProfilePage = withSuspense(
  lazy(() => import("@/modules/ProfilePage/ProfilePage"))
);
const GamePage = withSuspense(
  lazy(() => import("@/modules/GamePage/GamePage"))
);
const GameSelectionPage = withSuspense(
  lazy(() => import("@/modules/GameSelectionPage/GameSelectionPage"))
);
const StatsPage = withSuspense(
  lazy(() => import("@/modules/StatsPage/StatsPage"))
);

const userRoutes: RouteObject[] = [
  {
    path: appRoutes.game,
    element: <GamePage />,
  },
  {
    path: appRoutes.gameSelection,
    element: <GameSelectionPage />,
  },
  {
    path: appRoutes.stats,
    element: <StatsPage />,
  },
  {
    path: appRoutes.profile,
    element: <ProfilePage />,
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
