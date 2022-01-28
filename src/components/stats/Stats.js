import React from "react";
import InfoBox from "./infoBox/InfoBox";
import "./stats.css";

const Stats = () => {
  return (
    <div className="stats__container">
      <InfoBox />
      <InfoBox />
      <InfoBox />
    </div>
  );
};

export default Stats;
