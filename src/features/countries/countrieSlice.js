import { createSlice } from "@reduxjs/toolkit";
import { COUNTRIES } from "../../constants";
import { GetAllCountries } from "../../services/CountrieServices";

const initialState = {
  countries: [],
  selectedCountry: "Worldwide",
};

export const countrieSlice = createSlice({
  name: COUNTRIES,
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: {
    [GetAllCountries.pending]: (state, action) => {
      console.log("pending");
    },
    [GetAllCountries.fulfilled]: (state, action) => {
      console.log("fullfilled");
      state.countries = action.payload;
    },
    [GetAllCountries.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export const { setSelectedCountry } = countrieSlice.actions;

export const selectCountries = (state) => state.countries.countries;
export const getSelectedCountrie = (state) => state.countries.selectedCountry;

export default countrieSlice.reducer;
