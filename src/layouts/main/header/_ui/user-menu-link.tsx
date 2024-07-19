import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserMenuItem } from "../constants";
import { cn } from "@/lib/utils/styles";

export interface UserMenuLinkProps {
  item: UserMenuItem;
}
export const UserMenuLink: FC<UserMenuLinkProps> = ({ item }) => {
  const { pathname } = useLocation();
  const { href, icon, title, onClick } = item;

  return (
    <Link
      onClick={onClick}
      to={href}
      className={cn(
        "p-4 hover:bg-gray-200 text-slate-900 flex items-center gap-4 transition-colors duration-300",
        pathname === href ? "text-orange-700" : ""
      )}
    >
      {title}
      {icon}
    </Link>
  );
};
