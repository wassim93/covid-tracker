import React from "react";
import { useSelector } from "react-redux";
import { getDetails } from "../../features/countries/countrieSlice";
import InfoBox from "./infoBox/InfoBox";
import "./stats.css";

const Stats = () => {
  const details = useSelector(getDetails);
  //console.log(details);
  return (
    <div className="stats__container">
      <InfoBox
        title="CoronaVirus Cases"
        caseNumber={details.todayCases}
        total={details.cases}
      />
      <InfoBox
        title="Recovered"
        caseNumber={details.todayRecovered}
        total={details.recovered}
      />
      <InfoBox
        title="Deaths"
        caseNumber={details.todayDeaths}
        total={details.deaths}
      />
    </div>
  );
};

export default Stats;
