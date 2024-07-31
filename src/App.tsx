import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "./lib/configs/routes/routerConfig";
import "./globals.css";
import { store } from "./store";
import { fetchUser } from "./store/user/thunks";

store.dispatch(fetchUser());
function App() {
  return <RouterProvider router={appRoutersConfig}></RouterProvider>;
}

export default App;
