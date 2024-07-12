import { FC, SVGProps } from "react";

const RegisterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m0-2C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm-1 17h2v-6h-2v6zm1-11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);

RegisterIcon.displayName = "RegisterIcon";
export default RegisterIcon;
