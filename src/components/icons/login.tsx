import { FC, SVGProps } from "react";

const LoginIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 19v-2H3V7h7V5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7zm1.41-6.41L14.83 15H7v2h7.83l-3.42 3.41L13 22l6-6-6-6-1.59 1.59z" />
  </svg>
);

LoginIcon.displayName = "LoginIcon";
export default LoginIcon;
