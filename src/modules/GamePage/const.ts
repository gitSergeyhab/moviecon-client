import { EndGameStatus } from "@/type/game";

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
