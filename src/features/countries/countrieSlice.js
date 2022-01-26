import { createSlice } from "@reduxjs/toolkit";
import { COUNTRIES } from "../../constants";
import { GetAllCountries } from "../../services/CountrieServices";

const initialState = {
  countries: [],
};

export const countrieSlice = createSlice({
  name: COUNTRIES,
  initialState,
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

//export const selectCountries = (state) => state.countries.countries;
export default countrieSlice.reducer;
