import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { TestType, Variant } from "@/type/game";
import { Button } from "@/components/ui/button";
import { checkValueExist } from "@/lib/utils/common";
import { getCorrectAnswerId } from "@/store/game/selectors";
import { Portal } from "@/components/Portal";
import Modal from "@/components/Modal";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchAnswerQuestion } from "@/store/game/thunks";
import { cn } from "@/lib/utils/styles";
import { getGrigWrapperClasses, getUniqueVariants } from "../../helpers";
import { GameVariant } from "./GameVariant";

export interface VariantsSectionProps {
  testType: TestType;
  variants: Variant[];
  testId: string;
}

export const VariantsSection: FC<VariantsSectionProps> = ({
  variants,
  testType,
  testId,
}) => {
  const correctId = useSelector(getCorrectAnswerId);
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAnswerId, setModalAnswerId] = useState<string | number | null>(
    null
  );

  const filteredVariants = getUniqueVariants(variants);

  const handleImageClick = (variant: Variant) => {
    setModalImage(variant.imageUrl!);
    setModalAnswerId(variant.id!);
    setModalOpen(true);
  };

  const handleAnswerClick = async (variantId: string | number) => {
    setSelectedId(variantId);
    dispatch(fetchAnswerQuestion({ variantId, questionId: testId }));
  };

  const onClose = () => {
    setModalOpen(false);
    setModalAnswerId(null);
  };

  const handleModalBtnClick = () => {
    if (checkValueExist(modalAnswerId)) {
      handleAnswerClick(modalAnswerId);
    }
    setModalOpen(false);
    setModalAnswerId(null);
  };

  return (
    <section
      className={cn("gap-4 py-1 md:py-4 ", getGrigWrapperClasses(testType))}
    >
      {filteredVariants.map((variant) => (
        <GameVariant
          key={variant.id}
          selectedId={selectedId}
          correctId={correctId}
          onButtonClick={() => handleAnswerClick(variant.id!)}
          onImageClick={() => handleImageClick(variant)}
          testType={testType}
          variant={variant}
        />
      ))}
      {modalOpen && (
        <Portal containerId="#modal">
          <Modal onClose={onClose}>
            <img
              src={modalImage}
              alt=""
              className="w-full h-auto duration-300"
            />
            <Button className="w-full" onClick={handleModalBtnClick}>
              выбрать
            </Button>
          </Modal>
        </Portal>
      )}
    </section>
  );
};
