export type GameCategory = "rus" | "ussr" | "world" | "all";
export type GameDuration = "QUICK" | "COMMON" | "LONG";

export interface Level {
  number: number;
  time: number; // ms
  errors: number;
  skips: number;
  questions: number;
}

export type AnswerType =
  | "OneMovieWithImage"
  | "OneMovieWithoutImage"
  | "OneImageWithOutMovie"
  | "OnePersonWitImage"
  | "OnePersonWitOutImage"
  | "OneImageOfPerson"
  | "Year"
  | "Slogan";

export type TestType =
  | "PersonByMovie"
  | "MovieByPerson"
  | "MovieByFrame"
  | "FrameByMovie"
  | "PersonByPhoto"
  | "PhotoByPerson"
  | "YearByMovie"
  | "MovieByYear"
  | "SloganByMovie"
  | "MovieBySlogan"
  | "MovieByBudget";

export interface Variant {
  id?: string | number;
  enName?: string;
  name?: string;
  year?: number;
  imageUrl?: string;
  slogan?: string;
}

export interface Test {
  questionText: string;
  question: Variant;
  variants: Variant[];
  testType: TestType;
  id: string;
}

export type VariantId = string | number | undefined | null;

export interface LevelResult {
  answersScore: number;
  errorBonus: number;
  skipBonus: number;
  timeBonus: number;
  levelScore: number;
}

export type TestDict = Record<string, Test>;

export type GameStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "ENDED"
  | "WON"
  | "LOST"
  | "INFO_PAUSE";

export type EndGameStatus = Extract<GameStatus, "ENDED" | "WON" | "LOST">;

export type AnswerStatus = "correct" | "wrong" | "skipped" | "none";
export type NexGameAction = "NEXT_TEST" | "NEXT_LEVEL" | "GAME_OVER";
export type GameType = "SINGLE" | "MULTI";
