import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  getLevelInfo,
  getGameStatus,
  getPrevLevelResult,
  getTotalScore,
  getLoadingStatus,
  getInfoLoadingStatus,
} from "@/store/game/selectors";
import { fetchLevelInfo, fetchStartLevel } from "@/store/game/thunks";
import { ResultSection } from "./ResultSection";
import { LevelInfoSection } from "./LevelInfoSection";
import { Button } from "@/components/ui/button";
import appRoutes from "@/lib/configs/routes/routes";
import { GameOverSection } from "./GameOverSection";
import { Spinner } from "@/components/Spinner";
import { cn } from "@/lib/utils/styles";

const wrapperClasses = `bg-neutral-300/40 m-auto dark:bg-neutral-800/80 
    max-w-[1200px] rounded-lg mt-10 p-8 sm:px-16 px-2 
    flex flex-wrap`;

export const GameInfo = () => {
  const dispatch = useAppDispatch();
  const totalScore = useSelector(getTotalScore);
  const prevLevelResult = useSelector(getPrevLevelResult);
  const levelInfo = useSelector(getLevelInfo);
  const gameStatus = useSelector(getGameStatus);
  const loadingStatus = useSelector(getLoadingStatus);
  const infoLoadingStatus = useSelector(getInfoLoadingStatus);

  const navigate = useNavigate();
  const isLoading = loadingStatus === "loading";
  const isInfoLoading = infoLoadingStatus === "loading";

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

  const handleStartClick = () => dispatch(fetchStartLevel());
  const handleReStartClick = () => navigate(appRoutes.gameSelection);
  const isGameOver = ["ENDED", "WON", "LOST"].includes(gameStatus);

  const buttonTitle = isGameOver ? "Сыграть еще" : "Начать Уровень";
  const handleButtonClick = isGameOver ? handleReStartClick : handleStartClick;

  return (
    <div
      className={cn(
        wrapperClasses,
        "justify-around gap-y-2 sm:gap-y-8 text-sm sm:text-lg"
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
      <Button
        variant={"outline"}
        className="w-full"
        onClick={handleButtonClick}
        size={"lg"}
      >
        {isLoading ? <Spinner size="2xs" /> : buttonTitle}
      </Button>
    </div>
  );
};
