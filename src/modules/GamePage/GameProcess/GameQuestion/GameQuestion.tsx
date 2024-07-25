import { FC } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryBlock } from "../../_ui/PrimaryBlock";
import { SecondaryBlock } from "../../_ui/SecondaryBlock";
import { getContents, getQuestionClasses } from "../../helpers";
import { ControlsSection } from "./ControlsSection";
import Text from "@/components/ui/text";

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

  console.log({ imageClasses, imgWrapperClasses, wrapperClasses });
  return (
    <div className={wrapperClasses}>
      <div>
        <Text tag="h2" className="text-center text-lg md:text-2xl italic">
          {questionText}
        </Text>
        {!!primary && <PrimaryBlock text={primary} enText={enName} />}
        {!!secondary && <SecondaryBlock text={secondary} />}
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
