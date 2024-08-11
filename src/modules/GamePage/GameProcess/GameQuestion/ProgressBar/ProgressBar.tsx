import { useSelector } from "react-redux";
import { ProgressBarItem } from "./ProgressBarItem";
import { gameSelectors } from "@/store/game";

export const ProgressBar = () => {
  const statuses = useSelector(gameSelectors.getAnswerStatuses);
  const testIndex = useSelector(gameSelectors.getCurrentTestIndex);
  if (!statuses) return null;

  return (
    <div className="flex w-full mb-1 justify-between gap-1 px-4 py-1 bg-neutral-400 dark:bg-neutral-900 rounded-md shadow-xl md:py-2">
      {statuses.map((item, i) => (
        <ProgressBarItem status={item} isCurrent={i === testIndex} key={i} />
      ))}
    </div>
  );
};
