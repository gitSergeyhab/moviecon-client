import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useImagePreload } from "@/hooks/useImagePreload";
import appRoutes from "@/lib/configs/routes/routes";
import { getImages, getLoadingStatus } from "@/store/game/selectors";
import { fetchStartLevel } from "@/store/game/thunks";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const loadingStatus = useSelector(getLoadingStatus);
  const isLoading = loadingStatus === "loading";
  const images = useSelector(getImages);
  const { areImagesLoaded } = useImagePreload(images, !isGameOver);
  // console.log({ areImagesLoaded, isLoading, isGameOver });

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
