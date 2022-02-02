import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../config/http-common";
import { GET_WORLDWIDE_HISTORY_DATA } from "../constants";

export const GetWorldwideHistoryData = createAsyncThunk(
  GET_WORLDWIDE_HISTORY_DATA,
  async () =>
    await (
      await instance.get("/v3/covid-19/historical/all?lastdays=200")
    ).data
);
