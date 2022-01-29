import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./header.css";
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "../../features/countries/countrieSlice";
import {
  GetCountrieDetail,
  GetWorldwideDetails,
} from "../../services/CountrieServices";
import { WORLDWIDE } from "../../constants";

const Header = ({ data, selectedCountry }) => {
  const dispatch = useDispatch();
  const handleCountryChange = (e) => {
    //console.log(e.target.value);
    const countryCode = e.target.value;
    dispatch(setSelectedCountry(countryCode));

    countryCode === WORLDWIDE
      ? dispatch(GetWorldwideDetails())
      : dispatch(GetCountrieDetail(countryCode));
  };

  return (
    <div className="header">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <MenuItem value={WORLDWIDE}>{WORLDWIDE}</MenuItem>
          {data.map((country) => (
            <MenuItem
              key={`${country.countryInfo._id}_${country.country}`}
              value={country.countryInfo.iso3}
            >
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
