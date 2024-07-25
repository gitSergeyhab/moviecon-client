import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  getIsAnswerDone,
  getNexGameAction,
  getRemainingOptions,
  getLoadingStatus,
} from "@/store/game/selectors";
import { Spinner } from "@/components/Spinner";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { ConfirmExitGame } from "./ConfirmExitGame";
import { SkipForwardIcon, DoorOpenIcon } from "lucide-react";
import { getNextActionText } from "../../helpers";

export const ControlsSection: FC = () => {
  const options = useSelector(getRemainingOptions);
  const isAnswerDone = useSelector(getIsAnswerDone);
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoading = useSelector(getLoadingStatus) === "loading";

  const nexGameAction = useSelector(getNexGameAction);
  const dispatch = useAppDispatch();

  if (isAnswerDone === null) {
    console.error("невозможно получить статус вопроса");
    return <p>невозможно получить статус вопроса</p>;
  }

  if (!options || !nexGameAction) {
    console.error("невозможно получить данные уровня");
    return <p>невозможно получить данные уровня</p>;
  }

  const isSkipQuestionBtnShow = options.remainingSkips > 0 && !isAnswerDone;

  const handleClickSkipBtn = () => dispatch(fetchSkipQuestion());
  const handleCloseModal = () => setIsModalShown(false);
  const handleClickExitGameBtn = () =>
    dispatch(fetchExitGame(handleCloseModal));

  // TODO: обработка 404, когда сервер перезагрузился и айди с такой игрой уже нет

  console.log({ isSkipQuestionBtnShow, isAnswerDone, nexGameAction });

  return (
    <section className="flex gap-1 lg:gap-8 flex-wrap justify-center items-center sm:p-4 p-2 relative">
      {isLoading && (
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center">
          <Spinner size="xs" />
        </div>
      )}
      <Button
        type="button"
        onClick={handleClickSkipBtn}
        size={"sm"}
        className="w-full   max-w-72  hover:scale-105 transition-all disabled:opacity-20"
        variant={"outline"}
        disabled={isLoading || !isSkipQuestionBtnShow}
      >
        <span className="sm:inline hidden">
          {getNextActionText(nexGameAction)}
        </span>
        <span className="sm:hidden inline">
          <SkipForwardIcon size={20} />
        </span>
      </Button>
      <Button
        type="button"
        onClick={() => setIsModalShown(true)}
        size={"sm"}
        className="w-full max-w-72 scale-100 hover:scale-105 transition-all disabled:opacity-20"
        variant={"destructive"}
        disabled={isLoading || isAnswerDone}
      >
        <span className="sm:inline hidden">Завершить игру</span>
        <span className="sm:hidden inline">
          <DoorOpenIcon size={20} />
        </span>
      </Button>
      {isModalShown && (
        <Portal containerId="#modal">
          <Modal onClose={handleCloseModal} hasCrossBtn>
            <ConfirmExitGame
              onCancel={handleCloseModal}
              onConfirm={handleClickExitGameBtn}
            />
          </Modal>
        </Portal>
      )}
    </section>
  );
};
