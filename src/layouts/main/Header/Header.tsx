import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HeaderNav } from "./HeaderNav";
import { NavMenuLink } from "./NavMenuLink";
import { UserMenu } from "./UserMenu";
import MenuIcon from "@/components/icons/menu";
import PopcornIcon from "@/components/icons/popcorn";
import { useCloseOnOutClick } from "@/hooks/useCloseOnOutClick";
import { cn } from "@/lib/utils/styles";
import { ToggleTheme } from "@/components/ToggleTheme";
import { getUser } from "@/store/user/selectors";
import { getNavMenuItems } from "./helpers";
import appRoutes from "@/lib/configs/routes/routes";

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
    <header className="fixed top-0 bg-base-gradient w-full min-w-80 z-20 shadow-xl">
      <div className="flex items-center min-h-16 justify-between m-auto max-w-[1400px] font-bold px-4">
        <button
          data-no-close={"nav-menu"}
          className={cn(
            "mr-4 md:hidden",
            "hover:text-orange-500 transition-colors duration-300"
          )}
          onClick={closeNavMenu}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
        <Link
          to={appRoutes.main}
          className={"hover:text-orange-500 transition-colors duration-300"}
        >
          <PopcornIcon width={32} />
        </Link>
        <div className="flex items-center gap-8">
          <HeaderNav isMenuOpen={isMenuOpen}>
            {navMenuItems.map((item) => (
              <NavMenuLink item={item} key={item.href} />
            ))}
          </HeaderNav>
          <ToggleTheme />

          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
