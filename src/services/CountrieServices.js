import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../config/http-common";
import { GET_ALL_COUNTRIES } from "../constants";

export const GetAllCountries = createAsyncThunk(
  GET_ALL_COUNTRIES,
  async () => await (await instance.get("/v3/covid-19/countries")).data
);
