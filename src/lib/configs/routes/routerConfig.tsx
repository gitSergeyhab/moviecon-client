import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./publicRoutes";
import { userRoute } from "./userRoutes";
import { adminRoute } from "./adminRoutes";

export const appRoutersConfig = createBrowserRouter([
  publicRoute,
  userRoute,
  adminRoute,
]);
