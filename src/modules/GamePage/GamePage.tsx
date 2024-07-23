import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGameId, getGameStatus } from "@/store/game/selectors";
import appRoutes from "@/lib/configs/routes/routes";
import { GameProcess } from "./GameProcess/GameQuestion/GameProcess";
import { GameInfo } from "./GameInfo/GameInfo";

const GamePage: FC = () => {
  const gameStatus = useSelector(getGameStatus);
  const gameId = useSelector(getGameId);
  const [isInfo, setIsInfo] = useState(true);

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
