import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useImagePreload } from "@/hooks/useImagePreload";
import appRoutes from "@/lib/configs/routes/routes";
import { gameSelectors } from "@/store/game";
import { fetchStartLevel } from "@/store/game/thunks";

const getGameButtonTitle = (
  isGameOver: boolean,
  areImagesLoaded: boolean,
  isContentLoading: boolean
): ReactNode => {
  if (isGameOver) return "Сыграть еще";
  if (!areImagesLoaded)
    return (
      <>
        <Spinner size="2xs" />
        Грузим картинки...
        <Spinner size="2xs" />
      </>
    );
  return isContentLoading ? <Spinner size="2xs" /> : "Начать Уровень";
};

interface GameButtonBlockProps {
  isGameOver: boolean;
}
export const GameButtonBlock: FC<GameButtonBlockProps> = ({ isGameOver }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
  const isPreLoadingImages = useSelector(gameSelectors.getIsLoadingImages);
  const isLoading = loadingStatus === "loading";
  const images = useSelector(gameSelectors.getImages);
  const firstQuestionImages = useSelector(gameSelectors.getFirstQuestionImages);

  const { areImagesLoaded } = useImagePreload(
    isPreLoadingImages ? images : firstQuestionImages,
    !isGameOver
  );

  const handleStartClick = () => dispatch(fetchStartLevel());
  const handleReStartClick = () => navigate(appRoutes.gameSelection);
  const handleButtonClick = isGameOver ? handleReStartClick : handleStartClick;

  return (
    <Button
      variant={"outline"}
      className="w-full flex justify-center gap-4"
      onClick={handleButtonClick}
      disabled={!isGameOver && (isLoading || !areImagesLoaded)}
      size={"lg"}
    >
      {getGameButtonTitle(isGameOver, areImagesLoaded, isLoading)}
    </Button>
  );
};
