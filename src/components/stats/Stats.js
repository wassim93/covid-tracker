import React from "react";
import { useSelector } from "react-redux";
import { CASE_TYPES } from "../../constants";
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
        caseType={CASE_TYPES.CASES}
      />
      <InfoBox
        title="Recovered"
        caseNumber={details.todayRecovered}
        total={details.recovered}
        caseType={CASE_TYPES.RECOVERED}
      />
      <InfoBox
        title="Deaths"
        caseNumber={details.todayDeaths}
        total={details.deaths}
        caseType={CASE_TYPES.DEATHS}
      />
    </div>
  );
};

export default Stats;
