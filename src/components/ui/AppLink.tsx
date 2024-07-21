import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface AppLinkProps extends PropsWithChildren {
  to: string;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ children, to, className }) => (
  <Link
    className={cn(
      "mt-4 hover:text-orange-500 bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300  w-full text-center py-1 rounded-lg font-bold underline",
      className
    )}
    to={to}
  >
    {children}
  </Link>
);
