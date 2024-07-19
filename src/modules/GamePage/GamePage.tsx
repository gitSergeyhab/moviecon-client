import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGameId, getIsShownInfoBlock } from "@/store/game/selectors";
import appRoutes from "@/lib/configs/routes/routes";
import { GameProcess } from "./GameProcess/GameQuestion/GameProcess";
import { GameInfo } from "./GameInfo/GameInfo";

const GamePage: FC = () => {
  const isShownInfoBlock = useSelector(getIsShownInfoBlock);
  const gameId = useSelector(getGameId);

  if (gameId === null) {
    console.error("нет gameId");
    return <Navigate to={appRoutes.gameSelection} />;
  }

  if (isShownInfoBlock) {
    return <GameInfo />;
  }

  return <GameProcess />;
};

export default GamePage;
