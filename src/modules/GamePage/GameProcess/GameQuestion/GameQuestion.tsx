import { FC } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryBlock } from "../../_ui/PrimaryBlock";
import { getContents, getQuestionClasses } from "../../helpers";
import { ControlsSection } from "./ControlsSection";
import { PaleText, SecondaryHeader } from "@/components/ui/text";

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

  const { imageClasses, imgWrapperClasses, wrapperClasses } =
    getQuestionClasses(testType);

  return (
    <div className={wrapperClasses}>
      <div>
        <SecondaryHeader className="text-center italic">
          {questionText}
        </SecondaryHeader>
        {!!primary && <PrimaryBlock text={primary} enText={enName} />}
        {!!secondary && (
          <PaleText className="italic text-center">{secondary}</PaleText>
        )}
      </div>
      <div className={imgWrapperClasses}>
        {!!image && (
          <img
            src={image as string}
            alt=""
            className={imageClasses}
            onClick={onImageClick}
          />
        )}
      </div>
      <ControlsSection />
    </div>
  );
};
