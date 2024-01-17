"use client";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Paper } from "@mui/material";

export const Search = ({ props }) => {
  const [inputText, setInputText] = useState("");
  const [showLookingFor, setLookingFor] = useState(true);
  const [showOffering, setOffering] = useState(true);

  let inputHandler = (e) => {
    e.preventDefault();
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  let toggleLookingFor = async (e) => {
    e.preventDefault();
    await setLookingFor(!showLookingFor);
    var but = document.getElementById("looking-for-button");
    if (!showLookingFor) {
      but.style.backgroundColor = "aquamarine";
      but.style.textDecoration = "";
    } else {
      but.style.backgroundColor = "red";
      but.style.textDecoration = "line-through";
    }
  };

  let toggleOffering = async (e) => {
    e.preventDefault();
    await setOffering(!showOffering);
    var but = document.getElementById("offering-button");
    if (!showOffering) {
      but.style.backgroundColor = "aquamarine";
      but.style.textDecoration = "";
    } else {
      but.style.backgroundColor = "red";
      but.style.textDecoration = "line-through";
    }
  };

return (
  <>
    <Paper className="main">
      <Grid container>
        <Grid item xs={12}>
          <Paper className="search">
            <TextField
              id="search-input"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />
          </Paper>
        </Grid>
        <Grid className="filter-text-column" item xs={0.8}>
          <h4 className="filter-text">Searching for:</h4>
        </Grid>
        <Grid className="button-column" item xs={1}>
          <button
            id="looking-for-button"
            className="filter-button"
            onClick={toggleLookingFor}
          >
            Looking For
          </button>
        </Grid>
        <Grid className="button-column" item xs={1}>
          <button
            id="offering-button"
            className="filter-button"
            onClick={toggleOffering}
          >
            Offering
          </button>
        </Grid>
      </Grid>
    </Paper>
  </>
);
};
