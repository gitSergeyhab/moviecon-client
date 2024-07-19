import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GameQuestion } from "@/modules/GamePage/GameProcess/GameQuestion/GameQuestion";
import { getCurrentTest } from "@/store/game/selectors";
import appRoutes from "@/lib/configs/routes/routes";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { VariantsSection } from "../VariantsSection/VariantsSection";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export const GameProcess: FC = () => {
  const test = useSelector(getCurrentTest);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="p-4 pb-12 min-w-[320px] max-w-[1280px] m-auto bg-neutral-300/80 dark:bg-black/80 rounded-lg shadow-[0_5px_10px_5px_rgba(128,128,128,0.9)]">
      <ProgressBar />

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
