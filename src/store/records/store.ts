import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./const";
import { fetchUserRecords } from "./thunks";

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRecords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserRecords.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchUserRecords.fulfilled, (state, action) => {
        state.status = "success";
        state.records = action.payload;
      });
  },
});
