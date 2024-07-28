import { GameDuration } from "@/type/game";
import { UserAggregateRecords, GameResult } from "@/type/game-results";

export const getResultSplitByDuration = (results: UserAggregateRecords[]) => {
  return results.reduce((acc, item) => {
    const { params, bestResult } = item;
    const { duration } = params;
    if (!acc[duration]) {
      acc[duration] = [bestResult];
    } else {
      acc[duration].push(bestResult);
    }
    return acc;
  }, {} as Record<GameDuration, GameResult[]>);
};
