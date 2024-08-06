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
import { ErrorBlock } from "@/components/ErrorBlock";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import appRoutes from "@/lib/configs/routes/routes";

const wrapperClasses = `bg-neutral-300/70 dark:bg-neutral-800/80 flex flex-wrap p-8 rounded-lg px-2 sm:px-16`;

export const GameInfo = () => {
  const dispatch = useAppDispatch();
  const totalScore = useSelector(getTotalScore);
  const prevLevelResult = useSelector(getPrevLevelResult);
  const levelInfo = useSelector(getLevelInfo);
  const gameStatus = useSelector(getGameStatus);
  const isGameOver = useSelector(getIsGameOver);
  const infoLoadingStatus = useSelector(getInfoLoadingStatus);
  const isTransition = useSelector(getIsTransition);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchLevelInfo());
  }, [dispatch]);

  if (infoLoadingStatus === "loading") {
    return (
      <ContentLoader
        className={cn(wrapperClasses, "min-h-96 min-w-80 w-[80%] m-auto")}
      />
    );
  }

  if (infoLoadingStatus === "failed")
    return (
      <ErrorBlock text="Не удалось загрузить данные уровня">
        <Button onClick={() => navigate(appRoutes.main)}>На главную</Button>
        <Button onClick={() => navigate(appRoutes.gameSelection)}>
          Начать сначала
        </Button>
      </ErrorBlock>
    );

  return (
    <div className="m-auto mt-10 max-w-[1200px] rounded-lg">
      <div
        className={cn(
          wrapperClasses,
          "justify-around gap-y-2 text-center text-sm sm:text-lg sm:gap-y-4",
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
