import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCountries,
  GetWorldwideDetails,
} from "./services/CountrieServices";
import {
  getCaseType,
  getSelectedCountrie,
  selectCountries,
} from "./features/countries/countrieSlice";
import Stats from "./components/stats/Stats";
import Map from "./components/map/Map";
import { Card, CardContent } from "@mui/material";
import Table from "./components/table/Table";
import { sortData } from "./utils/utils";
import LineGraph from "./components/graph/LineGraph";

const App = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector(selectCountries);
  const selectedCountry = useSelector(getSelectedCountrie);
  const caseType = useSelector(getCaseType);

  useEffect(() => {
    dispatch(GetAllCountries());
    dispatch(GetWorldwideDetails());
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <Header data={countriesList} selectedCountry={selectedCountry} />
        <Stats />
        <Map caseType={caseType} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table data={sortData(countriesList)} />
          <h3>worldwide new {caseType}</h3>
          <LineGraph caseType={caseType} />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
