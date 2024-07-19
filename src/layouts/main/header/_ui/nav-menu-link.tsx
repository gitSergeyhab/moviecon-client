import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../constants";
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
        "block sm:mt-0 rounded-lg sm:px-4 py-0 back transition-colors hover:text-orange-500 duration-300",
        pathname === href ? "bg-zinc-900" : ""
      )}
    >
      {title}
    </Link>
  );
};
