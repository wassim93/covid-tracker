import { createSlice } from "@reduxjs/toolkit";
import { HISTORY } from "../../constants";

const initialState = {};

export const historySlice = createSlice({
  name: HISTORY,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default historySlice.reducer;
