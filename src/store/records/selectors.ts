import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { GameCategory, GameDuration } from "@/type/game";
import { UserAggregateRecords } from "@/type/game-results";
import { LoadingStatus } from "@/type/ui";

export const getUserRecords = (
  state: RootState
): UserAggregateRecords[] | null => state.records.records;

export const getUserRecordsStatus = (state: RootState): LoadingStatus =>
  state.records.status;
interface GetBestRecords {
  duration?: GameDuration;
  category?: GameCategory;
}
export const getBestRecords = ({ duration, category }: GetBestRecords) =>
  createSelector(getUserRecords, (records): UserAggregateRecords[] | null => {
    if (records === null) return null;
    return records.filter(
      ({ params }) =>
        params.duration === duration && params.category === category
    );
  });

export const getTopUserRecord = createSelector(getUserRecords, (records) => {
  if (records === null) return null;
  return records.reduce(
    (acc, record): number =>
      record.bestResult.score > acc ? record.bestResult.score : acc,
    0
  );
});
