import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

export interface FieldsetProps extends PropsWithChildren {
  name?: string;
  className?: string;
}
export const Fieldset: FC<FieldsetProps> = ({ children, name, className }) => {
  return (
    <fieldset
      className={cn(
        "border-4  pt-2 px-4 text-2xl rounded-md border-neutral-900 dark:border-neutral-200",
        className
      )}
    >
      {!!name && <legend className="font-bold px-2">{name}</legend>}
      {children}
    </fieldset>
  );
};
