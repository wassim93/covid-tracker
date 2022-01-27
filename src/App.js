import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCountries } from "./services/CountrieServices";
import {
  getSelectedCountrie,
  selectCountries,
} from "./features/countries/countrieSlice";

const App = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector(selectCountries);
  const selectedCountry = useSelector(getSelectedCountrie);
  useEffect(() => {
    dispatch(GetAllCountries());
  }, []);

  return (
    <div className="app">
      <Header data={countriesList} selectedCountry={selectedCountry} />
    </div>
  );
};

export default App;
