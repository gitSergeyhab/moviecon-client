import { FC, PropsWithChildren } from "react";

export interface HeaderNavProps extends PropsWithChildren {
  isMenuOpen: boolean;
}
export const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen, children }) => {
  return (
    <nav
      className={`md:flex md:bg-transparent md:static  md:items-center md:border-0 border-4 text-3xl md:text-xl flex-wrap lg:text-2xl absolute left-2 top-16  bg-base-gradient rounded-md ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      {children}
    </nav>
  );
};
