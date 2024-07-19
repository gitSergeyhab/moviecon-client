import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { noAuthUserMenuItems, userMenuItems } from "../constants";
import ProfileIcon from "@/components/icons/profile";
import { getUser } from "@/store/user/selectors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserMenu: FC = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const menuItems = user ? userMenuItems : noAuthUserMenuItems;
  const src = user?.avatar;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 h-10 hover:text-orange-600 transition-colors duration-300">
        {src ? (
          <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>Вы</AvatarFallback>
          </Avatar>
        ) : (
          <ProfileIcon />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 mt-4 p-2">
        <DropdownMenuLabel>
          {user ? user.name : "вход не выполнен"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map(({ href, icon, title, onClick }) => (
          <DropdownMenuItem
            className="gap-4 justify-between hover:bg-neutral-300 py-4"
            onClick={onClick || (() => navigate(href))}
            key={title}
          >
            {title}
            {icon}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
