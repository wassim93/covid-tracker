import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCountries } from "./services/CountrieServices";
import { selectCountries } from "./features/countries/countrieSlice";

const App = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector(selectCountries);
  useEffect(() => {
    dispatch(GetAllCountries());
  }, []);

  return (
    <div className="app">
      <Header data={countriesList} />
    </div>
  );
};

export default App;
