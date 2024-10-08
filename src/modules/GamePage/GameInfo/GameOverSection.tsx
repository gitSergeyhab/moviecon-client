import { EndGameStatus, GameStatus } from "@/type/game";
import { FC, useState } from "react";
import { PrimaryText } from "@/components/ui/text";
import { getRandomImage } from "../helpers";
import { cn } from "@/lib/utils/styles";

const imageClasses =
  "max-w-[600px] object-contain top flex h-64 w-full text-center rounded-md sm:max-h-max md:h-[480px] md:object-cover";

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
    <section className="bg-neutral-200/80 dark:bg-neutral-900/80 flex flex-col items-center w-full rounded-lg py-2 md:py-4">
      <h2 className="invisible h-0">Балы за всю игру и картинка</h2>
      <PrimaryText className="text-center font-bold text-2xl md:text-3xl">
        {gameStatus === "ENDED" && "Игра окончена"}
        {gameStatus === "LOST" && "Поражение"}
        {gameStatus === "WON" && "Победа!"}
      </PrimaryText>

      <img
        src={getRandomImage(gameStatus as EndGameStatus)}
        alt="result game image"
        onLoad={() => setImgLoaded(true)}
        className={cn(
          "block overflow-hidden",
          isImgLoaded ? imageClasses : "hidden"
        )}
      />
      {!isImgLoaded && <div className={imageClasses}></div>}

      <p className="text-center font-bold text-2xl">
        Ваш результат: {totalScore} баллов
      </p>
    </section>
  );
};
