import { createSlice } from "@reduxjs/toolkit";
import { COUNTRIES, WORLDWIDE } from "../../constants";
import {
  GetAllCountries,
  GetCountrieDetail,
  GetWorldwideDetails,
} from "../../services/CountrieServices";

const initialState = {
  countries: [],
  selectedCountry: WORLDWIDE,
  details: {},
  caseType: "cases",
};

export const countrieSlice = createSlice({
  name: COUNTRIES,
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setCaseType: (state, action) => {
      state.caseType = action.payload;
    },
  },
  extraReducers: {
    /* ALL COUNTRIES */
    [GetAllCountries.pending]: (state, action) => {
      //console.log("pending");
    },
    [GetAllCountries.fulfilled]: (state, action) => {
      //console.log("fullfilled");
      state.countries = action.payload;
    },
    [GetAllCountries.rejected]: (state, action) => {
      console.log("rejected all details");
    },
    /* COUNTRIE STATS DETAILS */

    [GetCountrieDetail.pending]: (state, action) => {
      // console.log("pending detail");
    },
    [GetCountrieDetail.fulfilled]: (state, action) => {
      //console.log("fullfilled detail");
      state.details = action.payload;
    },
    [GetCountrieDetail.rejected]: (state, action) => {
      console.log("rejected detail");
    },

    /* WORLDWIDE STATS DETAILS */

    [GetWorldwideDetails.pending]: (state, action) => {
      // console.log("pendin worldwide detail");
    },
    [GetWorldwideDetails.fulfilled]: (state, action) => {
      // console.log("fullfilled  worldwide detail");
      state.details = action.payload;
    },
    [GetWorldwideDetails.rejected]: (state, action) => {
      console.log("rejected worldwide detail");
    },
  },
});
export const { setSelectedCountry, setCaseType } = countrieSlice.actions;

export const selectCountries = (state) => state.countries.countries;
export const getSelectedCountrie = (state) => state.countries.selectedCountry;
export const getCaseType = (state) => state.countries.caseType;

export const getDetails = (state) => state.countries.details;

export default countrieSlice.reducer;
