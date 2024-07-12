import { ReactNode } from "react";
import ProfileIcon from "@/components/icons/profile";
import LogoutIcon from "@/components/icons/logout";
import RegisterIcon from "@/components/icons/register";
import LoginIcon from "@/components/icons/login";
import appRoutes from "@/lib/configs/routes/routes";
import { logout } from "@/lib/utils/user";

const { about, auth, game, main, profile, stats } = appRoutes;
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
    icon: <ProfileIcon className="w-4 h-4 ml-auto" />,
    title: "Профиль",
  },
  {
    href: "#",
    icon: <LogoutIcon className="w-4 h-4 ml-auto" />,
    title: "Выйти",
    onClick: logout,
  },
];

export const noAuthUserMenuItems: UserMenuItem[] = [
  {
    href: auth.register,
    icon: <RegisterIcon className="w-4 h-4 ml-auto" />,
    title: "Регистрация",
  },
  {
    href: auth.login,
    icon: <LoginIcon className="w-4 h-4 ml-auto" />,
    title: "Вход",
  },
];

export const navMenuItems: MenuItem[] = [
  { href: main, title: "Главная" },
  {
    href: game,
    title: "Играть",
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
