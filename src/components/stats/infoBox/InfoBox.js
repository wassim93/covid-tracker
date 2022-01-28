import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./infobox.css";

const InfoBox = () => {
  return (
    <Card className="infobox">
      <CardContent>
        <Typography color="textSecondary" className="infobox__title">
          Title
        </Typography>
        <h2 className="infobox__cases">Cases number</h2>
        <Typography color="textSecondary" className="infobox__total">
          Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
