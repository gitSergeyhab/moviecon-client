import {
  Test,
  Level,
  GameStatus,
  LevelResult,
  AnswerStatus,
} from "@/type/game";
import { request } from "./";
import { GameSelectionSchemaType } from "@/schemas/gameSelection";

const url = "/game/";
const getUrl = (path: string) => `${url}${path}`;

export const requestStartGame$ = ({
  duration,
  category,
}: GameSelectionSchemaType): Promise<{ gameId: string }> =>
  request.post(getUrl("start-game/"), { duration, category });

export const requestStartLevel$ = (
  gameId: string
): Promise<{ gameStatus: GameStatus }> =>
  request.put(getUrl(`start-level/${gameId}/`));

export const requestInfoLevel$ = (
  gameId: string
): Promise<{
  level: Level;
  testsDict: Record<string, Test>;
  prevLvlResult: LevelResult;
  totalScore: number;
  levelsCount: number;
}> => request.get(getUrl(`info-level/${gameId}/`));

export interface RequestAnswerQuestion {
  gameId: string;
  variantId: string | number;
  questionId: string;
}
export const requestAnswerQuestion$ = ({
  gameId,
  questionId,
  variantId,
}: RequestAnswerQuestion): Promise<{
  gameStatus: GameStatus;
  answerStatus: AnswerStatus;
  correctId: string | number;
}> =>
  request.put(getUrl(`answer-question/${gameId}/`), { variantId, questionId });

export const requestSkipQuestion$ = (
  gameId: string
): Promise<{ gameStatus: GameStatus; answerStatus: AnswerStatus }> =>
  request.put(getUrl(`skip-question/${gameId}/`));

export const requestEndGame$ = (
  gameId: string
): Promise<{ gameStatus: GameStatus }> =>
  request.put(getUrl(`end-game/${gameId}/`));
