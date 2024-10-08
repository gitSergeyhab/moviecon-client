import { FC, SVGProps } from "react";

export const KinopoiskApiIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24,2.5A21.5,21.5,0,1,0,45.5,24,21.51,21.51,0,0,0,24,2.5ZM19.23,8.35a5.32,5.32,0,1,1-5.31,5.31A5.32,5.32,0,0,1,19.23,8.35Zm15,5.52a5.31,5.31,0,1,1-5.32,5.31A5.31,5.31,0,0,1,34.26,13.87ZM24,21.33A2.67,2.67,0,0,1,26.69,24h0A2.68,2.68,0,0,1,24,26.67h0a2.67,2.67,0,1,1,0-5.34ZM13.74,23.45a5.32,5.32,0,1,1-5.32,5.32h0A5.32,5.32,0,0,1,13.74,23.45ZM28.79,29a5.31,5.31,0,1,1-5.31,5.31A5.32,5.32,0,0,1,28.79,29Z" />
  </svg>
);

KinopoiskApiIcon.displayName = "KinopoiskApiIcon";
export default KinopoiskApiIcon;
