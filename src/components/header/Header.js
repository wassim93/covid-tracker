import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./header.css";

const Header = ({ data }) => {
  return (
    <div className="header">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="header__dropdown">
        <Select variant="outlined" defaultValue="">
          <MenuItem value="worldwide">WorldWide</MenuItem>
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
