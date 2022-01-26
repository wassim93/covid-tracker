import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="header__dropdown">
        <Select variant="outlined" value="worldwide">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
