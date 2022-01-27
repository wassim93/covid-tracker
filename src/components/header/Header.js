import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./header.css";
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "../../features/countries/countrieSlice";

const Header = ({ data, selectedCountry }) => {
  const dispatch = useDispatch();

  const handleCountryChange = (e) => {
    console.log(e.target.value);
    dispatch(setSelectedCountry(e.target.value));
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
          <MenuItem value="Worldwide">Worldwide</MenuItem>
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
