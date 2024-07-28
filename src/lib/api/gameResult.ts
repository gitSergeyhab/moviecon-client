import { GameCategory, GameDuration, GameType } from "@/type/game";
import { request } from ".";
import { createQueryString } from "../utils/query";
import {
  GameAggregateRecord,
  UserAggregateRecords,
  GameAggregateScores,
  GameResult,
} from "@/type/game-results";

const url = "/game-result/";

const getUrl = (path: string) => `${url}${path}`;

export interface UserResultParams {
  limit: number;
  sort: "1" | "-1";
  offset: number;
  category: GameCategory | "none";
  type: GameType;
  duration: GameDuration | "none";
}

export const requestUserResults$ = (
  query: Partial<UserResultParams>
): Promise<{ results: GameResult[]; totalCount: number }> =>
  request.get(getUrl(`user-top?${createQueryString(query)}`));

export const requestUserRecords$ = (): Promise<UserAggregateRecords[]> =>
  request.get(getUrl("user-best/"));

export const requestRecords$ = (
  limit: number
): Promise<GameAggregateRecord[]> =>
  request.get(getUrl(`records?limit=${limit}`));

export const requestScores$ = (): Promise<GameAggregateScores[]> =>
  request.get(getUrl(`scores`));
