import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

interface AppLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
  blank?: boolean;
}

export const AppAnchorWithIcon: FC<AppLinkProps> = ({
  children,
  href,
  className,
  blank,
}) => (
  <a
    className={cn(
      "flex w-min",
      "hover:text-orange-500 transition-colors duration-300",
      className
    )}
    href={href}
    target={blank ? "_blank" : undefined}
  >
    {children}
  </a>
);
