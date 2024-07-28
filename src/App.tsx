import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "./lib/configs/routes/routerConfig";
import "./globals.css";

function App() {
  return <RouterProvider router={appRoutersConfig}></RouterProvider>;
}

export default App;
