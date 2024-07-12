import { FC, SVGProps } from "react";

const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9 5a3 3 0 100 6 3 3 0 000-6zm1 7a5 5 0 100-10 5 5 0 000 10zm-1 3a3 3 0 00-2.995 2.824L7 18h6a3 3 0 00.176-5.995L13 12H7a3 3 0 00-2.995 2.824L4 15v1zm7-1h2v2h-2v-2z"
      clipRule="evenodd"
    />
  </svg>
);

LogoutIcon.displayName = "LogoutIcon";
export default LogoutIcon;
