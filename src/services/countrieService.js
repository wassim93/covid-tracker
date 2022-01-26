import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../common/http-common";

export const GetAllCountries = createAsyncThunk(
  "countries/getall",
  async () => await (await instance.get("/v3/covid-19/countries")).data
);
