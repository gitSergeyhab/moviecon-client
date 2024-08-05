import { SecondaryHeader } from "@/components/ui/text";
import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

export interface ErrorBlockProps extends PropsWithChildren {
  text: string;
  className?: string;
}

export const ErrorBlock: FC<ErrorBlockProps> = ({
  children,
  className,
  text,
}) => (
  <div
    className={cn(
      "bg-neutral-200/50 dark:bg-neutral-800/50 flex justify-center items-center flex-wrap mx-auto max-w-full rounded-md p-4 h-64",
      className
    )}
  >
    <SecondaryHeader className="text-center">{text}</SecondaryHeader>
    {children ? (
      <div className="flex justify-center items-center w-full gap-4">
        {children}
      </div>
    ) : null}
  </div>
);
