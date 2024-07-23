import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  getLevelInfo,
  getGameStatus,
  getPrevLevelResult,
  getTotalScore,
  getInfoLoadingStatus,
  getIsTransition,
  getIsGameOver,
} from "@/store/game/selectors";
import { fetchLevelInfo } from "@/store/game/thunks";
import { ResultSection } from "./ResultSection";
import { LevelInfoSection } from "./LevelInfoSection";

import { GameOverSection } from "./GameOverSection";
import { Spinner } from "@/components/Spinner";
import { cn } from "@/lib/utils/styles";
import { GameButtonBlock } from "./GameButtonBlock";

const wrapperClasses = `bg-neutral-300/40 m-auto dark:bg-neutral-800/80 
    max-w-[1200px] rounded-lg mt-10 p-8 sm:px-16 px-2 
    flex flex-wrap`;

export const GameInfo = () => {
  const dispatch = useAppDispatch();
  const totalScore = useSelector(getTotalScore);
  const prevLevelResult = useSelector(getPrevLevelResult);
  const levelInfo = useSelector(getLevelInfo);
  const gameStatus = useSelector(getGameStatus);
  const isGameOver = useSelector(getIsGameOver);
  const infoLoadingStatus = useSelector(getInfoLoadingStatus);
  const isInfoLoading = infoLoadingStatus === "loading";
  const isTransition = useSelector(getIsTransition);

  useEffect(() => {
    dispatch(fetchLevelInfo());
  }, [dispatch]);

  if (isInfoLoading) {
    return (
      <div className={cn(wrapperClasses, "justify-center py-32")}>
        <Spinner size="2xl" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        wrapperClasses,
        "justify-around gap-y-2 sm:gap-y-8 text-sm sm:text-lg text-center",
        isTransition && "opacity-0"
      )}
    >
      {isGameOver && (
        <GameOverSection gameStatus={gameStatus} totalScore={totalScore} />
      )}
      {!!prevLevelResult && (
        <ResultSection
          levelResult={prevLevelResult}
          totalScore={totalScore}
          isGameOver={isGameOver}
        />
      )}
      {!!levelInfo && <LevelInfoSection level={levelInfo} />}
      <GameButtonBlock isGameOver={isGameOver} />
    </div>
  );
};
