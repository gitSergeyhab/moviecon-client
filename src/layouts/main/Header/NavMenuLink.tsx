import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./const";
import { cn } from "@/lib/utils/styles";
export interface UserMenuLinkProps {
  item: MenuItem;
}
export const NavMenuLink: FC<UserMenuLinkProps> = ({ item }) => {
  const { href, title } = item;
  const { pathname } = useLocation();

  return (
    <Link
      to={href}
      className={cn(
        "flex h-16 items-center px-4 w-full md:w-auto py-0 back  hover:bg-neutral-500/70 transition-colors  duration-300 ",
        pathname === href ? "bg-neutral-900/40" : "bg-transparent"
      )}
    >
      {title}
    </Link>
  );
};
