"use client";
import { React, useState } from "react";
import "./Search.css";
import { alpha, styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import { Box, Grid, Typography, ToggleButton } from "@mui/material";

export const Search = ({ props }) => {
  const [inputText, setInputText] = useState("");
  const [lookingFor, setLookingFor] = useState(true);
  const [offering, setOffering] = useState(true);
  const view = props[0];

  let inputHandler = (e) => {
    e.preventDefault();
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  if (view.toString() === "FrontPage") {
    return (
      <Box className="main">
        <Grid container>
          <Grid item xs={8}>
            <Box className="search">
              <TextField
                id="search-input"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
              />
            </Box>
          </Grid>
          <Grid className="filter-text-column" item xs={0.8}>
            <Typography variant="p" className="filter-text">Searching for:</Typography>
          </Grid>
          <Grid className="button-column" item xs={1}>
            <ToggleButton
              id="looking-for-button"
              value={lookingFor}
              className={lookingFor ? "toggle-button-green" : "toggle-button-red"}
              onChange={() => {
                setLookingFor(!lookingFor)}}
            >
              Looking For
            </ToggleButton>
          </Grid>
          <Grid className="button-column" item xs={1}>
            <ToggleButton
              id="offering-button"
              value={offering}
              className={offering ? "toggle-button-green" : "toggle-button-red"}
              onChange={() => {
                setOffering(!offering)}}
            >
              Offering
            </ToggleButton>
          </Grid>
        </Grid>
        <List
          input={inputText}
          includeLookingFor={lookingFor}
          includeOffering={offering}
        />
      </Box>
    );
  }
};
