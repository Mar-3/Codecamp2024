"use client";
import { Grid, Paper, Typography } from "@mui/material";
import { Notice } from "../Notice/Notice";
import React from "react";

export const NoticeBox = ({ props }) => {
  if (props) {
    return (
      <Grid item xs="5" minHeight="15rem" sx={{ padding: "1rem" }}>
        <Paper item sx={{ height: "100%", padding: "1rem" }}>
          <Typography variant="p">{props.type}</Typography>
          <Typography component="h4" variant="h5">
            {props.title}
          </Typography>
          <Grid item xs="auto">
            <Typography component="h6" variant="h6">
              {props.area}
            </Typography>
          </Grid>
          <Typography component="p">{props.ingress}</Typography>
          <Notice props={props} />
        </Paper>
      </Grid>
    );
  }
};
