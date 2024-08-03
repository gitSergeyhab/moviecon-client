import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "bg-neutral-400 bg-[url('/img/sd/big1.webp')] bg-no-repeat bg-cover bg-[center_top_-12rem] overflow-y-auto min-w-80 h-dvh hide-scrollbar"
      }
    >
      <Header />
      <main className="mt-24">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
