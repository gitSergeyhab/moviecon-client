import { GameState } from "./types";

export const initialState: GameState = {
  gameId: null,
  answerStatuses: null,
  levelInfo: null,
  prevLevelResult: null,
  levelErrors: 0,
  levelScore: 0,
  levelsCount: 0,
  levelSkipped: 0,
  totalScore: 0,
  gameStatus: "NOT_STARTED",
  currentTestIndex: 0,
  levelTestsDict: null,
  levelTestsIds: [],
  loadingStatus: "idle",
  infoLoadingStatus: "idle",
  correctAnswerId: null,
  isTransition: false,
  isImagePreloading: false,
};
