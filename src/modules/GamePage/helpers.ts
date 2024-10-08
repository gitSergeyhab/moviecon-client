import { BlockField, BlockType } from "@/lib/configs/game/config";
import { checkValueExist, getRandomItem } from "@/lib/utils/common";
import {
  GameStatus,
  NexGameAction,
  TestType,
  Variant,
  VariantId,
} from "@/type/game";
import { gameStatusImages, questionClasses, testTypeQuesVar } from "./const";

export const getContent = (
  settingsDict: Record<TestType, BlockField>,
  testType: TestType,
  block: keyof BlockField,
  variant: Variant
): string | number | null | undefined => {
  const blockFields = settingsDict[testType];
  const field = blockFields[block];
  if (!field) return null;
  return variant[field];
};

export const getContents = (
  settingsDict: Record<TestType, BlockField>,
  testType: TestType,
  variant: Variant
) => {
  const [primary, secondary, image, enName] = (
    ["primary", "secondary", "image", "enName"] as BlockType[]
  ).map((item) => getContent(settingsDict, testType, item, variant));
  return { primary, secondary, image, enName };
};

interface GetBorderColor {
  variantId: VariantId;
  correctId: VariantId;
  selectedId: VariantId;
}

export const getAnswerColorClasses = ({
  selectedId,
  correctId,
  variantId,
}: GetBorderColor): string => {
  if (!checkValueExist(selectedId)) return "border-neutral-400";
  if (!checkValueExist(correctId) && selectedId === variantId)
    return "border-orange-300 shadow-[0_5px_10px_5px_rgba(255,165,0,0.9)]";
  if (correctId === selectedId && correctId === variantId)
    return "border-green-500 shadow-[0_5px_10px_5px_rgba(0,128,0,0.9)]";
  if (correctId !== selectedId && selectedId === variantId)
    return "border-red-600 shadow-[0_5px_10px_5px_rgba(255,0,0,0.9)]";
  if (correctId !== selectedId && correctId === variantId)
    return "border-blue-500 shadow-[0_5px_10px_5px_rgba(0,0,255,0.9)]";
  return "border-neutral-400";
};

const flatGrigTypes: TestType[] = [
  "MovieByPerson",
  "PersonByMovie",
  "PhotoByPerson",
  "MovieBySlogan",
  "MovieByYear",
  "MovieByBudget",
];

export const getGrigWrapperClasses = (testType: TestType): string =>
  flatGrigTypes.includes(testType)
    ? "grid grid-cols-2  lg:grid-cols-4 "
    : "grid grid-cols-1 gap-1 sm:gap-2 md:gap-4 sm:grid-cols-2 ";

const getPath = (imgName: string): string => {
  const pathToImg = "/img/sd/";
  return `${pathToImg}${imgName}.webp`;
};

export const getRandomImage = (status: GameStatus): string => {
  const image = getRandomItem(gameStatusImages[status]);
  return getPath(image);
};

export const getUniqueVariants = (variants: Variant[]): Variant[] => {
  const hashId: Record<string, boolean> = {};
  return variants.filter((variant) => {
    if (hashId[variant.id!.toString()]) return false;
    hashId[variant.id!.toString()] = true;
    return true;
  });
};

export const getQuestionClasses = (type: TestType) =>
  questionClasses[testTypeQuesVar[type]];

export const getNextActionText = (nexGameAction: NexGameAction): string => {
  let text = "Пропустить ";

  switch (nexGameAction) {
    case "GAME_OVER":
      text += "и завершить игру";
      break;
    case "NEXT_LEVEL":
      text += "и завершить уровень";
      break;
    case "NEXT_TEST":
      text += "вопрос";
      break;
  }
  return text;
};

export const getBgImage = () => {
  const pathToImg = "/img/gameOverImages/";
  const format = "webp";
  return `${pathToImg}bg.${format}`;
};
