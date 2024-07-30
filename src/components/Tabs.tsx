import { cn } from "@/lib/utils/styles";

interface TabData<T extends string> {
  label: string;
  value: T;
}

export interface TabsProps<T extends string> {
  tabData: TabData<T>[];
  onClick: (value: T) => void;
  selectedValue: T;
  className?: string;
}

export const Tabs = <T extends string>({
  tabData,
  onClick,
  selectedValue,
  className,
}: TabsProps<T>) => {
  return (
    <ul
      className={cn(
        "flex justify-center border-y-4 md:border-4 border-transparent flex-wrap text-sm md:text-base",
        className
      )}
    >
      {tabData.map(({ label, value }) => (
        <li key={value}>
          <button
            onClick={() => onClick(value)}
            className={cn(
              "cursor-pointer  font-bold bg-neutral-600 opacity-80 px-2 md:px-8 py-2 hover:text-orange-500 transition-colors duration-300",
              value === selectedValue &&
                "bg-neutral-200/70 dark:bg-neutral-900/70 "
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
