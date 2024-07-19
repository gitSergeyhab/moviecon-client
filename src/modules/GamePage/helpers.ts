import { BlockField, BlockType } from "@/lib/configs/game/config";
import { checkValueExist } from "@/lib/utils/common";
import { GameStatus, TestType, Variant } from "@/type/game";

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
  variantId: string | number | undefined;
  correctId: string | number | null | undefined;
  selectedId: string | number | null | undefined;
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

const flatGrigTypes: TestType[] = ["MovieByPerson", "PersonByMovie"];

export const getGrigWrapperClasses = (testType: TestType): string =>
  flatGrigTypes.includes(testType)
    ? "grid grid-cols-2 lg:grid-cols-4 "
    : "grid sm:grid-cols-2 gap-4 grid-cols-1";

const getPath = (imgName: string): string => {
  const pathToImg = "/img/gameOverImages/";
  const format = "webp";
  return `${pathToImg}${imgName}.${format}`;
};

const getRandomItem = <T>(values: Array<T>): T => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

export type EndGameStatus = Extract<GameStatus, "ENDED" | "WON" | "LOST">;

export const getRandomGameOverSrc = (status: EndGameStatus): string => {
  const images: Record<EndGameStatus, string[]> = {
    WON: [
      "win-1",
      "win-2",
      "win-3",
      "win-4",
      "win-5",
      "win-6",
      "win-7",
      "win-8",
    ],
    LOST: [
      "lost-1",
      "lost-2",
      "lost-3",
      "lost-4",
      "lost-5",
      "lost-6",
      "lost-7",
      "lost-8",
    ],

    ENDED: ["end-1", "end-2", "end-3", "end-4", "end-5", "end-6", "end-7"],
  };
  const image = getRandomItem(images[status]);
  return getPath(image);
};
