import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "./_ui/header-nav";
import { navMenuItems } from "./constants";
import { NavMenuLink } from "./_ui/nav-menu-link";
import { UserMenu } from "./_ui/user-menu";
import MenuIcon from "@/components/icons/menu";
import PopcornIcon from "@/components/icons/popcorn";
import { useCloseOnOutClick } from "@/hooks/useCloseOnOutClick";
import { cn } from "@/lib/utils/styles";
import { ToggleTheme } from "@/components/ToggleTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useCloseOnOutClick({
    noCloseDataId: "nav-menu",
    onClose: () => setIsMenuOpen(false),
  });

  const closNavMenu: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-basic-gradient sticky top-0 text-white py-4 px-4 sm:px-8 flex items-center justify-between font-bold shadow-xl">
      <button
        data-no-close={"nav-menu"}
        className={cn(
          "text-white hover:text-orange-500 transition-colors duration-300",
          "sm:hidden mr-4"
        )}
        onClick={closNavMenu}
      >
        <MenuIcon className="w-8 h-8" />
      </button>
      <Link
        to={"/"}
        className={
          "text-white hover:text-orange-500 transition-colors duration-300"
        }
      >
        <PopcornIcon width={32} />
      </Link>
      <ToggleTheme />
      <div className="flex items-center gap-8">
        <HeaderNav isMenuOpen={isMenuOpen}>
          {navMenuItems.map((item) => (
            <NavMenuLink item={item} key={item.href} />
          ))}
        </HeaderNav>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
