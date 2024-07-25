import { EndGameStatus, TestType } from "@/type/game";

export const gameOverImages: Record<EndGameStatus, string[]> = {
  WON: ["win-1", "win-2", "win-3", "win-4", "win-5", "win-6", "win-7", "win-8"],
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
      "object-contain m-auto cursor-pointer w-full max-h-52 max-w-96 rounded-lg",
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
