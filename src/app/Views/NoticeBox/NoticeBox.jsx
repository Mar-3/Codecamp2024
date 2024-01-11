'use client'
import { Grid, Paper, Typography } from "@mui/material";
import { Notice } from "../Notice/Notice";
import React from "react";

export const NoticeBox = ({props}) => {
  // Logiikkaa yms
  console.log(props.title, props.area, props.ingress);
  // Returniin kaikki renderävät komponentit ja html
  return (
      <Grid item xs="auto" minHeight="15rem" sx={{padding:'1rem'}}>
          <Paper item sx={{ height: '100%', padding:'1rem'}}>
            <Typography component="h4" variant="h5">{props.title}</Typography>
            <Grid item xs="auto">
              <Typography component="h6" variant="h6">{props.area}</Typography>
            </Grid>
            <Typography component="p">{props.ingress}</Typography>
            <Notice props={props}/>
          </Paper>
      </Grid>

  );
}