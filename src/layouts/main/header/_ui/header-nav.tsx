import { FC, PropsWithChildren } from "react";

export interface HeaderNavProps extends PropsWithChildren {
  isMenuOpen: boolean;
}
export const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen, children }) => {
  return (
    <nav
      className={`min-h-12 sm:flex sm:items-center text-3xl sm:text-xl flex-wrap lg:text-2xl absolute left-2 top-16  bg-basic-dark sm:bg-transparent p-6 px-8 sm:static sm:p-0 sm:px-0 rounded-md ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      {children}
    </nav>
  );
};
