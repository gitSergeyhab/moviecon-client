import { ReactNode } from "react";
import { LogInIcon, LogOutIcon, UserIcon, UserPlus } from "lucide-react";
import appRoutes from "@/lib/configs/routes/routes";
import { logout } from "@/lib/utils/user";

const { about, auth, gameSelection, profile, stats, admin } = appRoutes;

type Page = "about" | "gameSelection" | "stats" | "admin";

const itemMenuClass = "w-4 h-4 ml-auto";
export interface MenuItem {
  title: string;
  href: string;
}

export interface UserMenuItem extends MenuItem {
  icon: ReactNode;
  onClick?: VoidFunction;
}

export const userMenuItems: UserMenuItem[] = [
  {
    href: profile,
    icon: <UserIcon className={itemMenuClass} />,
    title: "Профиль",
  },
  {
    href: "#",
    icon: <LogOutIcon className={itemMenuClass} />,
    title: "Выйти",
    onClick: logout,
  },
];

export const noAuthUserMenuItems: UserMenuItem[] = [
  {
    href: auth.register,
    icon: <UserPlus className={itemMenuClass} />,
    title: "Регистрация",
  },
  {
    href: auth.login,
    icon: <LogInIcon className={itemMenuClass} />,
    title: "Вход",
  },
];

export const navMenuItem: Record<Page, MenuItem> = {
  gameSelection: { href: gameSelection, title: "Игра" },
  stats: { href: stats, title: "Статистика" },
  about: { href: about, title: "О проекте" },
  admin: { href: admin, title: "Админка" },
};

export const navMenuNoAuthItems = [navMenuItem.about];
export const navMenuUserItems = [
  navMenuItem.gameSelection,
  navMenuItem.stats,
  navMenuItem.about,
];
export const navMenuAdminItems = [
  navMenuItem.gameSelection,
  navMenuItem.stats,
  navMenuItem.about,
  navMenuItem.admin,
];
