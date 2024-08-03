import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

export interface HeaderNavProps extends PropsWithChildren {
  isMenuOpen: boolean;
}
export const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen, children }) => {
  return (
    <nav
      className={cn(
        "absolute left-2 top-16 bg-base-gradient border-4 text-3xl rounded-md",
        "md:static md:bg-transparent md:flex flex-wrap md:items-center md:border-0 md:text-xl md:bg-none lg:text-2xl ",
        isMenuOpen ? "block" : "hidden"
      )}
    >
      {children}
    </nav>
  );
};
