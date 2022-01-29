import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCountries,
  GetWorldwideDetails,
} from "./services/CountrieServices";
import {
  getDetails,
  getSelectedCountrie,
  selectCountries,
} from "./features/countries/countrieSlice";
import Stats from "./components/stats/Stats";
import Map from "./components/map/Map";
import { Card, CardContent } from "@mui/material";
import Table from "./components/table/Table";
import { sortData } from "./utils/utils";

const App = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector(selectCountries);
  const selectedCountry = useSelector(getSelectedCountrie);
  useEffect(() => {
    dispatch(GetAllCountries());
    dispatch(GetWorldwideDetails());
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <Header data={countriesList} selectedCountry={selectedCountry} />
        <Stats />
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table data={sortData(countriesList)} />
          <h3>worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
