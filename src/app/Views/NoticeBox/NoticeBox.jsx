'use client'
import { Grid, Paper, Typography } from "@mui/material";
import { Notice } from "../Notice/Notice";
import React from "react";

export const NoticeBox = ({props}) => {
  // Logiikkaa yms
  console.log(props.title, props.area, props.ingress);
  // Returniin kaikki renderävät komponentit ja html
  return (
      <Grid alignContent={"space-around"} item xs="auto" minHeight="15rem">
          <Paper sx={{ height: '100%'}}>
            <Typography component="h4">{props.title}</Typography>
            <Grid item xs="auto">
              <Typography component="h6">{props.area}</Typography>
            </Grid>
            <Typography component="p">{props.ingress}</Typography>
            <Notice props={props}/>
          </Paper>
      </Grid>

  );
}