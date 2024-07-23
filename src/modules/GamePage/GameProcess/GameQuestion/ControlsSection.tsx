import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  getIsAnswerDone,
  getNexGameAction,
  getRemainingOptions,
  getIsTransition,
  getMadeSkips,
} from "@/store/game/selectors";
import { Spinner } from "@/components/Spinner";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { setTransition } from "@/store/game/store";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { ConfirmExitGame } from "./ConfirmExitGame";

export const ControlsSection: FC = () => {
  const options = useSelector(getRemainingOptions);
  const isAnswerDone = useSelector(getIsAnswerDone);
  const isTransition = useSelector(getIsTransition);
  const [isModalShown, setIsModalShown] = useState(false);
  const madeSkips = useSelector(getMadeSkips);

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

  if (isTransition)
    return (
      <section className="flex flex-col justify-center items-center sm:h-auto h-24">
        <Spinner size="xs" />
      </section>
    );

  const isSkipQuestionBtnShow = options.remainingSkips > 0 && !isAnswerDone;

  console.log({ isSkipQuestionBtnShow }, options.remainingSkips, { madeSkips });

  const handleClickSkipBtn = () => dispatch(fetchSkipQuestion());
  const handleClickContinueBtn = () => dispatch(setTransition(true));

  const handleCloseModal = () => setIsModalShown(false);
  const handleClickExitGameBtn = () =>
    dispatch(fetchExitGame(handleCloseModal));

  // TODO: обработка 404, когда сервер перезагрузился и айди с такой игрой уже нет
  return (
    <section className="flex flex-col gap-2 justify-center items-center px-4 sm:px-24 lg:px-12 sm:h-auto h-24">
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
