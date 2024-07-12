import { FC, SVGProps } from "react";

const ProfileIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 2a6 6 0 100 12 6 6 0 000-12zM4 8a4 4 0 118 0 4 4 0 01-8 0zM2 14a2 2 0 012-2h8a2 2 0 012 2v1H2v-1zM12 15v1H4v-1h8z"
      clipRule="evenodd"
    />
  </svg>
);

ProfileIcon.displayName = "ProfileIcon";
export default ProfileIcon;
