import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

export interface HeaderNavProps extends PropsWithChildren {
  isMenuOpen: boolean;
}
export const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen, children }) => {
  return (
    <nav
      className={cn(
        "md:flex md:bg-transparent md:static  md:items-center md:border-0 border-4 text-3xl md:text-xl flex-wrap lg:text-2xl absolute left-2 top-16  bg-base-gradient md:bg-none  rounded-md",
        isMenuOpen ? "block" : "hidden"
      )}
    >
      {children}
    </nav>
  );
};
