import { FC } from "react";
import { useSelector } from "react-redux";
import { VariantBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { getAnswerColorClasses, getContents } from "../../helpers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/styles";
import { gameSelectors } from "@/store/game";
import { ChoseBtnContent } from "./ChoseBtnContent";

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
  const isAnswerDone = useSelector(gameSelectors.getIsAnswerDone);
  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
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
        "relative border-2 sm:border-4 p-1 sm:p-2 rounded-lg  bg-neutral-300/85 dark:bg-neutral-800/95  flex flex-col justify-center",
        classes
      )}
    >
      {!!image && (
        <img
          src={image as string}
          alt=""
          className="w-full h-40 md:h-48 lg:h-72 object-contain m-auto cursor-pointer mb-1"
          onClick={onImageClick}
        />
      )}

      <Button
        variant={"outline"}
        className={cn(
          "w-full flex flex-col  border-2 border-neutral-400 min-h-10 py-[2px] px-1  h-auto ",
          "hover:text-orange-600 transition-colors duration-300",
          primary
            ? ""
            : "absolute right-1 top-1 w-min h-min p-2 rounded-full md:static md:w-full md:mt-2"
        )}
        onClick={isAnswerDone ? () => {} : onButtonClick}
        disabled={isAnswerDone || loadingStatus === "loading"}
      >
        <ChoseBtnContent
          primary={primary}
          enName={enName}
          secondary={secondary}
        />
      </Button>
    </div>
  );
};
