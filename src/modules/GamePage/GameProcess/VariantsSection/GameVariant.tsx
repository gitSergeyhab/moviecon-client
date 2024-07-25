import { FC } from "react";
import { useSelector } from "react-redux";
import { VariantBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryBlock } from "../../_ui/PrimaryBlock";
import { SecondaryBlock } from "../../_ui/SecondaryBlock";
import { getAnswerColorClasses, getContents } from "../../helpers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/styles";
import { getIsAnswerDone, getLoadingStatus } from "@/store/game/selectors";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  onImageClick: VoidFunction;
  onButtonClick: VoidFunction;
  selectedId: string | number | null;
  correctId: string | number | null;
}
export const GameVariant: FC<GameQuestionProps> = ({
  testType,
  variant,
  selectedId,
  correctId,
  onImageClick,
  onButtonClick,
}) => {
  const isAnswerDone = useSelector(getIsAnswerDone);
  const loadingStatus = useSelector(getLoadingStatus);
  const { enName, image, primary, secondary } = getContents(
    VariantBlocksByTestType,
    testType,
    variant
  );

  const classes = getAnswerColorClasses({
    selectedId,
    correctId,
    variantId: variant.id,
  });

  return (
    <div
      className={cn(
        "border-2 sm:border-4 p-1 sm:p-2 rounded-lg  bg-neutral-300/85 dark:bg-neutral-800/95  flex flex-col justify-between",
        classes
      )}
    >
      {!!primary && <PrimaryBlock text={primary} enText={enName} />}
      {!!secondary && <SecondaryBlock text={secondary} />}
      {!!image && (
        <img
          src={image as string}
          alt=""
          className="w-full h-40 md:h-48 lg:h-72 object-contain m-auto cursor-pointer"
          onClick={onImageClick}
        />
      )}
      <Button
        variant={"outline"}
        className="w-full mt-1 md:mt-2  border-2 border-neutral-400  hover:border-orange-600 transition duration-300"
        onClick={isAnswerDone ? () => {} : onButtonClick}
        disabled={isAnswerDone || loadingStatus === "loading"}
      >
        Выбрать
      </Button>
    </div>
  );
};
