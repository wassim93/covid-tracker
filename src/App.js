import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { GetAllCountries } from "./services/countrieService";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCountries());
  }, []);

  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
