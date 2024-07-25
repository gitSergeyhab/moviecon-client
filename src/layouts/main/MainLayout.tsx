import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-neutral-400 bg-[url('/img/CityLights.jpg')] bg-no-repeat bg-cover bg-top overflow-y-auto min-w-80  h-dvh hide-scrollbar">
      <Header />
      <main className="mt-24">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
