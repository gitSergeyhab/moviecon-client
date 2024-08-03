import { FC, MouseEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { noAuthUserMenuItems, userMenuItems } from "./const";
import ProfileIcon from "@/components/icons/profile";
import { getUser } from "@/store/user/selectors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCloseOnOutClick } from "@/hooks/useCloseOnOutClick";
import { cn } from "@/lib/utils/styles";

export const UserMenu: FC = () => {
  const user = useSelector(getUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useCloseOnOutClick({
    noCloseDataId: "user-menu",
    onClose: () => setIsMenuOpen(false),
  });

  const closeNavMenu: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = user ? userMenuItems : noAuthUserMenuItems;
  const src = user?.avatar;

  return (
    <div className="relative h-10">
      <button
        onClick={closeNavMenu}
        data-no-close={"user-menu"}
        type="button"
        className={cn(
          "w-10 h-10",
          "hover:text-orange-600 transition-colors duration-300"
        )}
      >
        {src ? (
          <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>Вы</AvatarFallback>
          </Avatar>
        ) : (
          <ProfileIcon />
        )}
      </button>
      {isMenuOpen && (
        <div
          className={cn(
            "absolute right-0 bg-base-gradient flex flex-col gap-1 p-1 py-2 border-4"
          )}
        >
          <div className="text-center">
            {user ? user.name : "вход не выполнен"}
          </div>
          <hr className="mb-2" />
          {menuItems.map(({ href, icon, title, onClick }) => (
            <button
              type="button"
              className={cn(
                "bg-neutral-500/10 flex justify-between border-0 items-center h-10 min-w-40 px-2 rounded-none",
                "transition-colors hover:bg-neutral-500/70"
              )}
              onClick={onClick || (() => navigate(href))}
              key={title}
            >
              {title}
              {icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
