import { FC } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryBlock } from "../../_ui/PrimaryBlock";
import { SecondaryBlock } from "../../_ui/SecondaryBlock";
import { ImageBlock } from "../../_ui/ImageBlock";
import { getContents } from "../../helpers";
import { MainHeader } from "@/components/ui/headers";
import { ControlsSection } from "./ControlsSection";
import { InfoSection } from "./InfoSection";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  questionText: string;
  onImageClick: VoidFunction;
}
export const GameQuestion: FC<GameQuestionProps> = ({
  questionText,
  testType,
  variant,
  onImageClick,
}) => {
  const { enName, image, primary, secondary } = getContents(
    QuestionBlocksByTestType,
    testType,
    variant
  );
  return (
    <div className="bg-neutral-300/70 dark:bg-neutral-800/90 px-4 pb-2 rounded-lg grid lg:grid-cols-3 border-4 border-neutral-400 ">
      <InfoSection />
      <section>
        <MainHeader>{questionText}</MainHeader>
        {!!primary && <PrimaryBlock text={primary} enText={enName} />}
        {!!secondary && <SecondaryBlock text={secondary} />}
        {!!image && (
          <ImageBlock imageUrl={image as string} onClick={onImageClick} />
        )}
      </section>
      <ControlsSection />
    </div>
  );
};
