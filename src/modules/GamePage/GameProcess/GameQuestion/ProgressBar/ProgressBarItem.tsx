import { FC } from "react";
import { cn } from "@/lib/utils/styles";
import { AnswerStatus } from "@/type/game";

const getClasses = (status: AnswerStatus) => {
  switch (status) {
    case "correct":
      return "bg-green-500";
    case "skipped":
      return "bg-neutral-600";
    case "wrong":
      return "bg-red-500";
    default:
      return "bg-neutral-100";
  }
};

interface ProgressBarItemProps {
  status: AnswerStatus;
  isCurrent: boolean;
}

export const ProgressBarItem: FC<ProgressBarItemProps> = ({
  status,
  isCurrent,
}) => (
  <div
    className={cn(
      "h-2 w-full rounded-sm shadow-lg",
      getClasses(status),
      isCurrent ? "outline outline-4 outline-orange-500" : ""
    )}
  />
);
