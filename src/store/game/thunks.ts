import {
  requestAnswerQuestion$,
  requestEndGame$,
  requestInfoLevel$,
  requestSkipQuestion$,
  requestStartLevel$,
} from "@/lib/api/game";
import { ApiError } from "@/type/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../";
import { getGameId } from "./selectors";
import {
  AnswerStatus,
  GameStatus,
  Level,
  LevelResult,
  TestDict,
} from "@/type/game";

export const fetchLevelInfo = createAsyncThunk<
  {
    level: Level;
    testsDict: TestDict;
    prevLvlResult: LevelResult;
    levelTestIds: string[];
    totalScore: number;
    levelsCount: number;
  },
  undefined,
  { state: RootState; rejectValue: string }
>("game/fetchLevelInfo", async (_, { getState, rejectWithValue }) => {
  try {
    const gameId = getGameId(getState());
    if (gameId === null) {
      throw new Error("Игра не найдена");
    }
    const response = await requestInfoLevel$(gameId);
    const levelTestIds = Object.keys(response.testsDict || {});
    return { ...response, levelTestIds };
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});

export const fetchStartLevel = createAsyncThunk<
  {
    gameStatus: GameStatus;
  },
  undefined,
  { state: RootState; rejectValue: string }
>("game/fetchStartLevel", async (_, { getState, rejectWithValue }) => {
  try {
    const gameId = getGameId(getState());
    if (gameId === null) {
      throw new Error("Игра не найдена");
    }

    return await requestStartLevel$(gameId);
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});

export const fetchAnswerQuestion = createAsyncThunk<
  {
    gameStatus: GameStatus;
    answerStatus: AnswerStatus;
    correctId: string | number;
  },
  {
    variantId: string | number;
    questionId: string;
  },
  { state: RootState; rejectValue: string }
>(
  "game/fetchAnswerQuestion",
  async (answerData, { getState, rejectWithValue }) => {
    try {
      const gameId = getGameId(getState());
      const { questionId, variantId } = answerData;

      if (gameId === null) {
        throw new Error("Игра не найдена");
      }

      return await requestAnswerQuestion$({ variantId, questionId, gameId });
    } catch (err) {
      return rejectWithValue((err as ApiError).message);
    }
  }
);

export const fetchSkipQuestion = createAsyncThunk<
  {
    gameStatus: GameStatus;
    answerStatus: AnswerStatus;
  },
  undefined,
  { state: RootState; rejectValue: string }
>("game/fetchSkipQuestion", async (_, { getState, rejectWithValue }) => {
  try {
    const gameId = getGameId(getState());
    if (gameId === null) {
      throw new Error("Игра не найдена");
    }
    return await requestSkipQuestion$(gameId);
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});

export const fetchExitGame = createAsyncThunk<
  {
    gameStatus: GameStatus;
  },
  VoidFunction,
  { state: RootState; rejectValue: string }
>("game/fetchExitGame", async (onSuccess, { getState, rejectWithValue }) => {
  try {
    const gameId = getGameId(getState());
    if (gameId === null) {
      throw new Error("Игра не найдена");
    }
    onSuccess();
    return await requestEndGame$(gameId);
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});
