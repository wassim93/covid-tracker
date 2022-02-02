import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCaseType } from "../../../features/countries/countrieSlice";
import { prettyPrintedStat } from "../../../utils/utils";
import "./infobox.css";

const InfoBox = ({ title, caseNumber, total, caseType }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(setCaseType(caseType));
  };
  return (
    <Card className="infobox" onClick={handleCardClick}>
      <CardContent>
        <Typography color="textSecondary" className="infobox__title">
          {title}
        </Typography>
        <h2 className="infobox__cases">{prettyPrintedStat(caseNumber)}</h2>
        <Typography color="textSecondary" className="infobox__total">
          {prettyPrintedStat(total)} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
