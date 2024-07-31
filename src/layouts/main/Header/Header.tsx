import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";
import { NavMenuLink } from "./NavMenuLink";
import { UserMenu } from "./UserMenu";
import MenuIcon from "@/components/icons/menu";
import PopcornIcon from "@/components/icons/popcorn";
import { useCloseOnOutClick } from "@/hooks/useCloseOnOutClick";
import { cn } from "@/lib/utils/styles";
import { ToggleTheme } from "@/components/ToggleTheme";
import { useSelector } from "react-redux";
import { getUser } from "@/store/user/selectors";
import { getNavMenuItems } from "./helpers";

const Header = () => {
  const user = useSelector(getUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useCloseOnOutClick({
    noCloseDataId: "nav-menu",
    onClose: () => setIsMenuOpen(false),
  });

  const closeNavMenu: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const navMenuItems = getNavMenuItems(user?.role);

  return (
    <header className="bg-base-gradient  fixed w-full z-20 top-0    shadow-xl min-w-80 ">
      <div className="flex items-center min-h-16 justify-between font-bold max-w-[1400px] m-auto px-4">
        <button
          data-no-close={"nav-menu"}
          className={cn(
            " hover:text-orange-500 transition-colors duration-300",
            "md:hidden mr-4"
          )}
          onClick={closeNavMenu}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
        <Link
          to={"/"}
          className={" hover:text-orange-500 transition-colors duration-300"}
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
      </div>
    </header>
  );
};

export default Header;
