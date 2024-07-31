import { FC } from "react";
import { SkipForwardIcon, StarIcon } from "lucide-react";
import { cn } from "@/lib/utils/styles";

export interface InfoBarIcon {
  count: number;
  isActive?: boolean;
  type: "star" | "skip";
}
export const InfoBarIcons: FC<InfoBarIcon> = ({ count, isActive, type }) => {
  const classNames = cn(
    "sm:w-5 w-3 sm:h-5 h-3",
    isActive
      ? "fill-orange-500 text-orange-500"
      : "fill-neutral-400 text-neutral-800 opacity-50"
  );

  return Array(count)
    .fill(null)
    .map((_, i) =>
      type === "star" ? (
        <StarIcon className={classNames} key={i} />
      ) : (
        <SkipForwardIcon className={classNames} key={i} />
      )
    );
};
