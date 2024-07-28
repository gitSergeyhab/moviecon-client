import { GameCategory, GameDuration, GameType } from "./game";

export type GameResultStatus = "WON" | "LOST" | "ENDED";

export interface GameResult {
  category: GameCategory;
  score: number;
  type: GameType;
  duration: GameDuration;
  userId: string;
  userName: string;
  status: GameResultStatus;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ResultParam {
  duration: GameDuration;
  type: GameType;
  category: GameCategory;
}

export interface UserAggregateRecords {
  params: ResultParam;
  bestResult: GameResult;
}

export interface GameAggregateRecord {
  params: ResultParam;
  bestResult: GameResult[];
}
export interface GameAggregateScores {
  params: ResultParam;
  scores: number[];
}
