import { getAnswerStatuses, getCurrentTestIndex } from "@/store/game/selectors";
import { useSelector } from "react-redux";
import { ProgressBarItem } from "./ProgressBarItem";

export const ProgressBar = () => {
  const statuses = useSelector(getAnswerStatuses);
  const testIndex = useSelector(getCurrentTestIndex);
  if (!statuses) return null;

  return (
    <div className="flex w-full mb-1 justify-between gap-1 px-4 py-2 bg-neutral-400 dark:bg-neutral-900 rounded-md shadow-xl">
      {statuses.map((item, i) => (
        <ProgressBarItem status={item} isCurrent={i === testIndex} key={i} />
      ))}
    </div>
  );
};
