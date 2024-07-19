import {
  AnswerStatus,
  GameStatus,
  Level,
  LevelResult,
  NexGameAction,
  Test,
  TestDict,
} from "@/type/game";
import { RootState } from "../";
import { createSelector } from "@reduxjs/toolkit";
import { LoadingStatus } from "@/type/ui";

export const getGameStatus = (state: RootState): GameStatus =>
  state.game.gameStatus;

export const getGameId = (state: RootState): string | null => state.game.gameId;

export const getPrevLevelResult = (state: RootState): LevelResult | null =>
  state.game.prevLevelResult;
export const getTotalScore = (state: RootState): number =>
  state.game.totalScore;
export const getAnswerStatuses = (state: RootState): AnswerStatus[] | null =>
  state.game.answerStatuses;

export const getInfoLoadingStatus = (state: RootState): LoadingStatus =>
  state.game.infoLoadingStatus;
export const getLoadingStatus = (state: RootState): LoadingStatus =>
  state.game.loadingStatus;

export const getCurrentTestIndex = (state: RootState): number =>
  state.game.currentTestIndex;

export const getIsAnswerDone = createSelector(
  getAnswerStatuses,
  getCurrentTestIndex,
  (statuses, index): boolean | null => {
    if (!statuses || !statuses.length) return null;
    const status = statuses[index];
    if (!status) return null;
    return status !== "none";
  }
);

export const getTestIndexes = (state: RootState): string[] =>
  state.game.levelTestsIds;

export const getTestsDict = (state: RootState): TestDict | null =>
  state.game.levelTestsDict;

export const getCorrectAnswerId = (state: RootState): string | number | null =>
  state.game.correctAnswerId;

export const getLevelInfo = (state: RootState): Level | null =>
  state.game.levelInfo;

export const getMadeErrors = (state: RootState): number =>
  state.game.levelErrors;
export const getMadeSkips = (state: RootState): number =>
  state.game.levelSkipped;
export const getQuestions = (state: RootState): number =>
  state.game.levelTestsIds.length;

export const getLevelsCount = (state: RootState): number =>
  state.game.levelsCount;

export const getCurrentTest = createSelector(
  getCurrentTestIndex,
  getTestsDict,
  getTestIndexes,
  (index, dict, ids): Test | null => {
    if (!dict) return null;
    return dict[ids[index]] || null;
  }
);

export const getRemainingOptions = createSelector(
  getLevelInfo,
  getMadeErrors,
  getMadeSkips,
  getCurrentTestIndex,
  (
    info,
    errors,
    skips,
    index
  ): {
    remainingErrors: number;
    remainingQuestions: number;
    remainingSkips: number;
  } | null => {
    if (!info) return null;
    const remainingErrors = info.errors - errors;
    const remainingSkips = info.errors - skips;
    const remainingQuestions = info.errors - index;
    return { remainingErrors, remainingQuestions, remainingSkips };
  }
);

export const getNexGameAction = createSelector(
  getLevelsCount,
  getCurrentTestIndex,
  getLevelInfo,
  getMadeErrors,
  (levelsCount, index, level, errors): NexGameAction | null => {
    if (!level) return null;
    if (
      (level.questions === index + 1 && level.number === levelsCount) ||
      level.errors < errors
    ) {
      return "GAME_OVER";
    }
    if (level.questions === index + 1) {
      return "NEXT_LEVEL";
    }
    return "NEXT_TEST";
  }
);

const getIsDelayBeforeInfo = (state: RootState): boolean =>
  state.game.isDelayBeforeInfo;

export const getIsShownInfoBlock = createSelector(
  getGameStatus,
  getIsDelayBeforeInfo,
  (status, isDelay): boolean => status !== "IN_PROGRESS" && !isDelay
);
