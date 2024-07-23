import { SecondaryHeader } from "@/components/ui/headers";
import { EndGameStatus, GameStatus } from "@/type/game";
import { FC, useState } from "react";
import { getRandomGameOverSrc } from "../helpers";

const imageClasses =
  "max-w-[600px] object-contain flex h-64 sm:max-h-max w-full text-center rounded-sm";

export interface GameOverSectionProps {
  gameStatus: GameStatus;
  totalScore: number;
}

export const GameOverSection: FC<GameOverSectionProps> = ({
  gameStatus,
  totalScore,
}) => {
  const [isImgLoaded, setImgLoaded] = useState(false);
  return (
    <section className="w-full flex flex-col items-center bg-neutral-200/80 dark:bg-neutral-900/80  rounded-lg py-4">
      <SecondaryHeader>
        {gameStatus === "ENDED" && "Игра окончена"}
        {gameStatus === "LOST" && "Поражение"}
        {gameStatus === "WON" && "Победа!"}
      </SecondaryHeader>

      <img
        src={getRandomGameOverSrc(gameStatus as EndGameStatus)}
        alt=""
        onLoad={() => setImgLoaded(true)}
        className={isImgLoaded ? imageClasses : "hidden"}
      />
      {!isImgLoaded && <div className={imageClasses}></div>}

      <p className="text-center font-bold text-2xl py-4">
        Ваш результат: {totalScore} баллов
      </p>
    </section>
  );
};
