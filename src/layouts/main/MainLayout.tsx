import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import { cn } from "@/lib/utils/styles";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        "bg-neutral-400 bg-no-repeat bg-cover bg-top overflow-y-auto min-w-80 bg-base-gradient h-dvh hide-scrollbar bg-[url('/img/sd/big1.webp')] "
      )}
    >
      <Header />
      <main className="mt-24">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
