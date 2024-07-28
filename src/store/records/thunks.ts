import { requestUserRecords$ } from "@/lib/api/gameResult";
import { ApiError } from "@/type/api";
import { UserAggregateRecords } from "@/type/game-results";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserRecords = createAsyncThunk<
  UserAggregateRecords[],
  undefined,
  { rejectValue: string }
>("records/fetchUserRecords", async (_, { rejectWithValue }) => {
  try {
    const records = await requestUserRecords$();
    return records;
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});
