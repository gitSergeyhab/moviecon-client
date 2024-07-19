import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-neutral-400 bg-[url('/img/CityLights.jpg')] bg-no-repeat bg-cover bg-top overflow-y-auto  h-dvh hide-scrollbar">
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
