import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./infobox.css";

const InfoBox = ({ title, caseNumber, total }) => {
  return (
    <Card className="infobox">
      <CardContent>
        <Typography color="textSecondary" className="infobox__title">
          {title}
        </Typography>
        <h2 className="infobox__cases">{caseNumber}</h2>
        <Typography color="textSecondary" className="infobox__total">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
