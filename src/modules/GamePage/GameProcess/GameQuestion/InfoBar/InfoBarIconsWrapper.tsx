import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/styles";

interface InfoBarIconsWrapperProps extends PropsWithChildren {
  className?: string;
}
export const InfoBarIconsWrapper: FC<InfoBarIconsWrapperProps> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      "flex justify-center items-center grow bg-neutral-200 px-2 rounded-full gap-1",
      className
    )}
  >
    {children}
  </div>
);
