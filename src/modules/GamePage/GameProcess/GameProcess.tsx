import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GameQuestion } from "@/modules/GamePage/GameProcess/GameQuestion/GameQuestion";
import {
  getCurrentTest,
  getIsLoadingImages,
  getIsTransition,
  getNextQuestionImages,
} from "@/store/game/selectors";
import appRoutes from "@/lib/configs/routes/routes";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { VariantsSection } from "./VariantsSection/VariantsSection";
import { ProgressBar } from "./GameQuestion/ProgressBar/ProgressBar";
import { cn } from "@/lib/utils/styles";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setNextQuestion, setTransition } from "@/store/game/store";
import { InfoBar } from "./GameQuestion/InfoBar/InfoBar";
import { title } from "../const";
import { useImagePreload } from "@/hooks/useImagePreload";

export const GameProcess: FC = () => {
  const test = useSelector(getCurrentTest);
  const [modalOpen, setModalOpen] = useState(false);
  const isTransition = useSelector(getIsTransition);
  const nextQuestionImages = useSelector(getNextQuestionImages);
  const isPreLoadingImages = useSelector(getIsLoadingImages);
  useImagePreload(nextQuestionImages, !isPreLoadingImages);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (isTransition) {
      timer = setTimeout(() => {
        dispatch(setTransition(false));
        dispatch(setNextQuestion());
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [dispatch, isTransition]);

  if (!test) {
    console.error("Тест не найден");
    return <Navigate to={appRoutes.gameSelection} />;
  }

  const { question, testType } = test;
  const { imageUrl } = question;

  const handleQuestionImageClick = () => {
    if (!question.imageUrl) return;
    setModalOpen(true);
  };

  const onClose = () => setModalOpen(false);

  return (
    <div
      className={cn(
        "p-4 pb-12 min-w-[320px] max-w-[1280px]  md:min-h-[1040px] m-auto bg-neutral-300/80 dark:bg-black/80 rounded-lg shadow-[0_5px_10px_5px_rgba(128,128,128,0.9)] relative transition duration-500 ease-in-out",
        isTransition ? "opacity-70" : "opacity-100"
      )}
    >
      <h1 className="invisible h-0">{title}</h1>
      <div
        className={cn(
          "rounded-lg z-10 absolute top-0 left-0 right-0 bottom-0 bg-black pointer-events-none transition duration-500 ease-in-out",
          isTransition ? "opacity-100" : "opacity-0"
        )}
      />
      <ProgressBar />
      <InfoBar />
      <GameQuestion
        onImageClick={handleQuestionImageClick}
        questionText={test.questionText}
        testType={testType}
        variant={question}
      />

      <VariantsSection
        testType={testType}
        variants={test.variants}
        testId={test.id}
      />
      {modalOpen && (
        <Portal containerId="#modal">
          <Modal onClose={onClose}>
            <img src={imageUrl} alt="" className="w-full h-auto duration-300" />
          </Modal>
        </Portal>
      )}
    </div>
  );
};
