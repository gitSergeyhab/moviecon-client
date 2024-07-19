import { ReactNode } from "react";
import ProfileIcon from "@/components/icons/profile";
import LogoutIcon from "@/components/icons/logout";
import RegisterIcon from "@/components/icons/register";
import LoginIcon from "@/components/icons/login";
import appRoutes from "@/lib/configs/routes/routes";
import { logout } from "@/lib/utils/user";

const { about, auth, gameSelection, main, profile, stats } = appRoutes;

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
    icon: <ProfileIcon className={itemMenuClass} />,
    title: "Профиль",
  },
  {
    href: "#",
    icon: <LogoutIcon className={itemMenuClass} />,
    title: "Выйти",
    onClick: logout,
  },
];

export const noAuthUserMenuItems: UserMenuItem[] = [
  {
    href: auth.register,
    icon: <RegisterIcon className={itemMenuClass} />,
    title: "Регистрация",
  },
  {
    href: auth.login,
    icon: <LoginIcon className={itemMenuClass} />,
    title: "Вход",
  },
];

export const navMenuItems: MenuItem[] = [
  { href: main, title: "Главная" },
  {
    href: gameSelection,
    title: "Игра",
  },
  {
    href: stats,
    title: "Статистика",
  },
  {
    href: about,
    title: "Инфо",
  },
];
