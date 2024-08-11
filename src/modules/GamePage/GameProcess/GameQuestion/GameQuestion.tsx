import { FC } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryBlock } from "../../PrimaryBlock";
import { getContents, getQuestionClasses } from "../../helpers";
import { ControlsSection } from "./ControlsSection";
import { PaleText } from "@/components/ui/text";

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
      <div className="px-[2px]">
        <PaleText className="text-center italic underline text-sm sm:text-lg md:text-xl">
          {questionText}
        </PaleText>
        {!!primary && <PrimaryBlock text={primary} enText={enName} />}
        {!!secondary && (
          <PaleText className="italic text-center">{secondary}</PaleText>
        )}
      </div>
      <div className={imgWrapperClasses}>
        {!!image && (
          <img
            src={image as string}
            alt="картинка вопроса"
            className={imageClasses}
            onClick={onImageClick}
          />
        )}
      </div>
      <ControlsSection />
    </div>
  );
};
