import { useTitle } from "@/hooks/useTitle";
import { FC, PropsWithChildren } from "react";
import { title } from "./const";

export interface AuthFormLayoutProps extends PropsWithChildren {}

export const AuthFormLayout: FC<AuthFormLayoutProps> = ({ children }) => {
  useTitle(title);
  return (
    <div className="container mx-auto p-4 flex">
      <div
        className="bg-background-opacity flex flex-col items-center m-auto p-6 sm:min-w-[400px] min-w-full
         rounded-md shadow-[0_35px_80px_15px_rgba(0,0,0,0.9)]"
      >
        {children}
      </div>
    </div>
  );
};
