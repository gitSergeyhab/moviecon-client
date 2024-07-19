import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  getIsAnswerDone,
  getLoadingStatus,
  getNexGameAction,
  getRemainingOptions,
} from "@/store/game/selectors";
import { Spinner } from "@/components/Spinner";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { setIsDelayBeforeInfo, setNextQuestion } from "@/store/game/store";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { ConfirmExitGame } from "./ConfirmExitGame";

export const ControlsSection: FC = () => {
  const options = useSelector(getRemainingOptions);
  const isAnswerDone = useSelector(getIsAnswerDone);
  const loadingStatus = useSelector(getLoadingStatus);
  const [isModalShown, setIsModalShown] = useState(false);

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

  if (loadingStatus === "loading")
    return (
      <section className="flex flex-col justify-center items-center">
        <Spinner size="sm" />
      </section>
    );

  const isSkipQuestionBtnShow = options.remainingSkips > 0 && !isAnswerDone;

  const handleClickSkipBtn = () => {
    dispatch(fetchSkipQuestion());
    dispatch(setIsDelayBeforeInfo(false));
  };
  const handleClickContinueBtn = () => {
    dispatch(setNextQuestion());
    dispatch(setIsDelayBeforeInfo(false));
  };

  const handleCloseModal = () => setIsModalShown(false);
  const handleClickExitGameBtn = () =>
    dispatch(fetchExitGame(handleCloseModal));

  return (
    <section className="flex flex-col gap-2 justify-center items-center px-4 sm:px-24 lg:px-12 ">
      {isSkipQuestionBtnShow && (
        <Button
          type="button"
          onClick={handleClickSkipBtn}
          className="w-full border-red-500 border-2 "
          variant={"outline"}
        >
          Пропустить
          {nexGameAction === "GAME_OVER" && " и завершить игру"}
          {nexGameAction === "NEXT_LEVEL" && " и завершить уровень"}
          {nexGameAction === "NEXT_TEST" && " вопрос"}
        </Button>
      )}
      {isAnswerDone && (
        <Button
          onClick={handleClickContinueBtn}
          className="w-full border-neutral-500 border-2"
          variant={"outline"}
        >
          {nexGameAction === "NEXT_TEST"
            ? "Следующий вопрос"
            : "Посмотреть результаты"}
        </Button>
      )}
      <Button
        onClick={() => setIsModalShown(true)}
        className="w-full "
        variant={"destructive"}
        size={"xs"}
      >
        Завершить игру
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
