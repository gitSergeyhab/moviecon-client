import { useSelector } from "react-redux";
import {
  getLevelInfo,
  getCurrentTestIndex,
  getMadeErrors,
  getMadeSkips,
  getLevelsCount,
} from "@/store/game/selectors";
import { FC } from "react";
import { ShieldQuestionIcon } from "lucide-react";
import { InfoBarIconsWrapper } from "./InfoBarIconsWrapper";
import { InfoBarIcons } from "./InfoBarIcon";

export const InfoBar: FC = () => {
  const levelInfo = useSelector(getLevelInfo);
  const testIndex = useSelector(getCurrentTestIndex);

  const madeErrors = useSelector(getMadeErrors);
  const madeSkips = useSelector(getMadeSkips);
  const levelsCount = useSelector(getLevelsCount);

  if (levelInfo === null) {
    console.error("невозможно получить статус вопроса");
    return <p>невозможно получить данные уровня</p>;
  }

  const { errors, number, questions, skips } = levelInfo;
  console.log({ errors, number, questions, skips, madeSkips, madeErrors });

  return (
    <div className="flex flex-wrap w-full mb-1 justify-between gap-1 p-0 bg-neutral-400 dark:bg-neutral-900 rounded-full shadow-xl sm:text-l text-xs">
      <InfoBarIconsWrapper className="grow">
        <InfoBarIcons count={madeErrors} type="star" />
        <InfoBarIcons
          count={Math.max(errors - madeErrors, 0)}
          isActive
          type="star"
        />
      </InfoBarIconsWrapper>
      <InfoBarIconsWrapper className="grow">
        <InfoBarIcons count={madeSkips} type="skip" />
        <InfoBarIcons
          count={Math.max(skips - madeSkips, 0)}
          isActive
          type="skip"
        />
      </InfoBarIconsWrapper>
      <InfoBarIconsWrapper className="shrink">
        <ShieldQuestionIcon height={16} />
        {testIndex + 1} / {questions}
      </InfoBarIconsWrapper>
      <InfoBarIconsWrapper className="shrink">
        lvl {number} / {levelsCount}
      </InfoBarIconsWrapper>
    </div>
  );
};
