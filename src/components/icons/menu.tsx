import { FC, SVGProps } from "react";

const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 000 2h2.764l.102.006a1 1 0 01.947 1.275L8.764 10H6a1 1 0 000 2h2.764l.102.006a1 1 0 01.947 1.275L8.764 18H6a1 1 0 000 2h8a1 1 0 000-2h-2.764l-.102-.006a1 1 0 01-.947-1.275L11.236 12H14a1 1 0 100-2h-2.764l-.102-.006a1 1 0 01-.947-1.275L11.236 4H14a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);

MenuIcon.displayName = "MenuIcon";
export default MenuIcon;
