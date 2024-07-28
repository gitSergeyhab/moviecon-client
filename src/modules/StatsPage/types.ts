import { GameCategory, GameDuration } from "@/type/game";

export interface HistogramData {
  name: string;
  count: number;
  isUser?: boolean;
}

export type DurationTabTata = { label: string; value: GameDuration };
export type CategoryTabTata = { label: string; value: GameCategory };
