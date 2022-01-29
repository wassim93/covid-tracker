import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../config/http-common";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIE_DETAILS,
  GET_WORLDWIDE_DETAILS,
} from "../constants";

export const GetAllCountries = createAsyncThunk(
  GET_ALL_COUNTRIES,
  async () => await (await instance.get("/v3/covid-19/countries")).data
);

export const GetWorldwideDetails = createAsyncThunk(
  GET_WORLDWIDE_DETAILS,
  async () => await (await instance.get("/v3/covid-19/all")).data
);

export const GetCountrieDetail = createAsyncThunk(
  GET_COUNTRIE_DETAILS,
  async (country) =>
    await (
      await instance.get(`/v3/covid-19/countries/${country}`)
    ).data
);
