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
import { cn } from "@/lib/utils/styles";
import { GameButtonBlock } from "./GameButtonBlock";
import { ContentLoader } from "@/components/ContentLoader";

const wrapperClasses = `bg-neutral-300/70 dark:bg-neutral-800/80 
 p-8 sm:px-16 px-2 rounded-lg
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
      <ContentLoader
        className={cn(wrapperClasses, "min-h-96 min-w-80 w-[80%] m-auto")}
      />
    );
  }

  return (
    <div
      className="m-auto 
    max-w-[1200px] rounded-lg mt-10 bg-[url('/img/game-go2.webp')] bg-no-repeat bg-cover bg-center "
    >
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
    </div>
  );
};
