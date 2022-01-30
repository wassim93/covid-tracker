import { createSlice } from "@reduxjs/toolkit";
import { HISTORY } from "../../constants";
import { GetWorldwideHistoryData } from "../../services/HistoryServices";

const initialState = {
  data: {},
};

export const historySlice = createSlice({
  name: HISTORY,
  initialState,
  reducers: {},
  extraReducers: {
    [GetWorldwideHistoryData.pending]: (state, action) => {
      // console.log("pending history");
    },
    [GetWorldwideHistoryData.fulfilled]: (state, action) => {
      // console.log("fullfilled history");
      state.data = action.payload;
    },
    [GetWorldwideHistoryData.rejected]: (state, action) => {
      console.log("rejected history");
    },
  },
});

export const getData = (state) => state.history.data;

export default historySlice.reducer;
