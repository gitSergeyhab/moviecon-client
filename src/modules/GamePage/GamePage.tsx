import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appRoutes from "@/lib/configs/routes/routes";
import { GameProcess } from "./GameProcess/GameProcess";
import { GameInfo } from "./GameInfo/GameInfo";
import { useTitle } from "@/hooks/useTitle";
import { title } from "./const";
import { gameSelectors } from "@/store/game";

const GamePage: FC = () => {
  const gameStatus = useSelector(gameSelectors.getGameStatus);
  const gameId = useSelector(gameSelectors.getGameId);
  const [isInfo, setIsInfo] = useState(true);

  useTitle(title);
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (gameStatus === "IN_PROGRESS") {
      setIsInfo(false);
    } else {
      timer = setTimeout(() => setIsInfo(true), 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gameStatus]);

  if (gameId === null) {
    return <Navigate to={appRoutes.gameSelection} />;
  }

  if (isInfo) {
    return <GameInfo />;
  }

  return <GameProcess />;
};

export default GamePage;
