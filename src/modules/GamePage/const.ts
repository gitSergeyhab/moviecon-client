import { GameStatus, TestType } from "@/type/game";
const neutralImages = [
  "couple-neutral-1",
  "couple-neutral-2",
  "couple-neutral-3",
  "couple-neutral-4",
  "man-neutral-1",
  "man-neutral-2",
  "man-neutral-3",
  "man-neutral-4",
  "man-neutral-5",
  "woman-neutral-1",
  "woman-neutral-2",
  "woman-neutral-3",
  "woman-neutral-4",
  "woman-neutral-5",
  "woman-neutral-6",
  "woman-neutral-7",
  "woman-neutral-8",
  "woman-neutral-9",
  "woman-neutral-10",
];

export const gameStatusImages: Record<GameStatus, string[]> = {
  WON: [
    "couple-smile-1",
    "couple-smile-2",
    "couple-smile-3",
    "couple-smile-4",
    "couple-smile-5",
    "couple-smile-6",
    "couple-smile-7",
    "man-smile-1",
    "man-smile-2",
    "woman-smile-1",
    "woman-smile-2",
    "woman-smile-3",
    "woman-smile-4",
    "woman-smile-5",
    "woman-smile-6",
    "woman-smile-7",
    "woman-smile-8",
    "woman-smile-9",
    "woman-smile-10",
    "woman-smile-11",
    "woman-smile-12",
    "woman-smile-13",
  ],

  LOST: [
    "man-sad-1",
    "man-sad-2",
    "man-sad-3",
    "man-sad-4",
    "woman-sad-1",
    "woman-sad-2",
    "woman-sad-3",
    "woman-sad-4",
    "woman-sad-5",
  ],
  ENDED: neutralImages,
  IN_PROGRESS: neutralImages,
  INFO_PAUSE: neutralImages,
  NOT_STARTED: neutralImages,
} as const;

type QuestVar = "small" | "big" | "usual";
type Block = "wrapperClasses" | "imageClasses" | "imgWrapperClasses";
export const questionClasses: Record<QuestVar, Record<Block, string>> = {
  small: {
    wrapperClasses:
      "bg-neutral-300/70 dark:bg-neutral-800/90 border-4 p-1 border-neutral-400",
    imageClasses:
      "object-contain m-auto cursor-pointer w-full min-h-36 min-w-18 max-h-96 max-w-96 rounded-lg",
    imgWrapperClasses:
      "col-start-1 row-start-1 row-span-2 max-w-48 flex justify-center items-center",
  },
  big: {
    wrapperClasses:
      "bg-neutral-300/70 dark:bg-neutral-800/90 border-4 border-neutral-400",
    imageClasses:
      "object-contain m-auto cursor-pointer w-full max-h-64 md:max-h-96 max-w-96 rounded-lg",
    imgWrapperClasses: "",
  },
  usual: {
    wrapperClasses:
      "bg-neutral-300/70 dark:bg-neutral-800/90 border-4 p-1 border-neutral-400 grid md:grid-cols-[256px_auto] grid-cols-[auto_auto] align-middle items-center",
    imageClasses:
      "object-contain m-auto cursor-pointer w-full min-h-36 min-w-18 max-h-96 max-w-96 rounded-lg",
    imgWrapperClasses:
      "col-start-1 row-start-1 row-span-2 max-w-48 flex justify-center items-center",
  },
};

export const testTypeQuesVar: Record<TestType, QuestVar> = {
  MovieByPerson: "usual",
  PersonByMovie: "usual",
  PhotoByPerson: "small",
  MovieBySlogan: "small",
  MovieByBudget: "small",
  MovieByYear: "small",
  MovieByFrame: "big",
  FrameByMovie: "small",
  PersonByPhoto: "usual",
  YearByMovie: "usual",
  SloganByMovie: "usual",
};

export const title = "Игра";
