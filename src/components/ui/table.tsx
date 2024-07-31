import { cn } from "@/lib/utils/styles";
import { FC, PropsWithChildren } from "react";

export interface TableProps extends PropsWithChildren {
  className?: string;
}

export const Table: FC<TableProps> = ({ children, className }) => (
  <table
    className={cn(
      "border-collapse sm:border-4 border-0 border-neutral-200 lg:text-base sm:text-sm text-xs",
      className
    )}
  >
    {children}
  </table>
);

export interface TableRowProps extends PropsWithChildren {
  type: "header" | "body";
  className?: string;
}
export const TableRow: FC<TableRowProps> = ({ children, type, className }) => {
  const baseClassName =
    type === "body"
      ? "even:bg-neutral-100 dark:even:bg-neutral-800 odd:bg-white dark:odd:bg-neutral-900"
      : "bg-neutral-200  dark:bg-neutral-700 text-left uppercase";

  return <tr className={cn(baseClassName, className)}>{children}</tr>;
};

export interface TableHProps extends PropsWithChildren {
  className?: string;
}
export const TableH: FC<TableHProps> = ({ children, className }) => (
  <th
    className={cn(
      "py-[6px] px-4 border-b-2 border-neutral-300 dark:border-neutral-600 ",
      className
    )}
  >
    {children}
  </th>
);

export interface TableDProps extends PropsWithChildren {
  className?: string;
}

export const TableD: FC<TableDProps> = ({ children, className }) => (
  <td
    className={cn(
      "py-1 px-4 border-b border-neutral-300 dark:border-neutral-600",
      className
    )}
  >
    {children}
  </td>
);
