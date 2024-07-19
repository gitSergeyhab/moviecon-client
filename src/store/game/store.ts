import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./const";
import {
  fetchAnswerQuestion,
  fetchExitGame,
  fetchLevelInfo,
  fetchSkipQuestion,
  fetchStartLevel,
} from "./thunks";

const gameSlice = createSlice({
  initialState,
  name: "game",
  reducers: {
    resetGame() {
      return initialState;
    },
    startGame(state, { payload }: PayloadAction<{ gameId: string }>) {
      state.gameId = payload.gameId;
    },
    setNextQuestion(state) {
      state.currentTestIndex++;
    },
    setIsDelayBeforeInfo(state, { payload }: PayloadAction<boolean>) {
      state.isDelayBeforeInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLevelInfo.pending, (state) => {
      state.infoLoadingStatus = "loading";
    });
    builder.addCase(fetchLevelInfo.rejected, (state) => {
      state.infoLoadingStatus = "failed";
    });
    builder.addCase(fetchLevelInfo.fulfilled, (state, { payload }) => {
      state.infoLoadingStatus = "succeeded";
      const {
        level,
        prevLvlResult,
        testsDict,
        levelTestIds,
        totalScore,
        levelsCount,
      } = payload;
      state.levelInfo = level;
      state.prevLevelResult = prevLvlResult || null;
      state.levelTestsDict = testsDict;
      state.levelTestsIds = levelTestIds;
      state.totalScore = totalScore;
      state.levelsCount = levelsCount;
    });

    builder.addCase(fetchStartLevel.pending, (state) => {
      state.loadingStatus = "loading";
    });
    builder.addCase(fetchStartLevel.rejected, (state) => {
      state.loadingStatus = "failed";
    });
    builder.addCase(fetchStartLevel.fulfilled, (state, { payload }) => {
      state.loadingStatus = "succeeded";
      const { gameStatus } = payload;
      state.gameStatus = gameStatus;
      state.levelErrors = 0;
      state.levelScore = 0;
      state.levelSkipped = 0;
      state.answerStatuses = state.levelTestsIds.map(() => "none");
      state.currentTestIndex = 0;
    });

    builder.addCase(fetchAnswerQuestion.pending, (state) => {
      state.loadingStatus = "loading";
      state.correctAnswerId = null;
    });
    builder.addCase(fetchAnswerQuestion.rejected, (state) => {
      state.loadingStatus = "failed";
    });
    builder.addCase(fetchAnswerQuestion.fulfilled, (state, { payload }) => {
      state.loadingStatus = "succeeded";
      const { answerStatus, correctId, gameStatus } = payload;
      const index = state.currentTestIndex;
      if (state.answerStatuses) {
        state.answerStatuses[index] = answerStatus;
      }
      state.correctAnswerId = correctId;
      state.gameStatus = gameStatus;
      if (answerStatus === "wrong") {
        state.levelErrors++;
      }
    });

    builder.addCase(fetchSkipQuestion.pending, (state) => {
      state.loadingStatus = "loading";
      state.correctAnswerId = null;
    });
    builder.addCase(fetchSkipQuestion.rejected, (state) => {
      state.loadingStatus = "failed";
    });
    builder.addCase(fetchSkipQuestion.fulfilled, (state, { payload }) => {
      const { gameStatus } = payload;
      state.loadingStatus = "succeeded";
      const index = state.currentTestIndex;
      const questionsCount = state.levelInfo?.questions;
      if (!questionsCount) {
        throw new Error("не задано количество вопросов");
      }
      if (state.answerStatuses) {
        state.answerStatuses[index] = "skipped";
      }
      state.gameStatus = gameStatus;
      state.levelSkipped++;
      if (questionsCount > index + 1) {
        state.currentTestIndex++;
      }
    });

    builder.addCase(fetchExitGame.pending, (state) => {
      state.loadingStatus = "loading";
      state.correctAnswerId = null;
    });
    builder.addCase(fetchExitGame.rejected, (state) => {
      state.loadingStatus = "failed";
    });
    builder.addCase(fetchExitGame.fulfilled, (state) => {
      state.loadingStatus = "succeeded";
      state.gameStatus = "ENDED";
      state.isDelayBeforeInfo = false;
    });
  },
});

export const { startGame, setNextQuestion, setIsDelayBeforeInfo, resetGame } =
  gameSlice.actions;
export default gameSlice;
