"use client";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "../../src/app/globals.css";
import { Box, Grid, Typography, ToggleButton } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Search = ({ props }) => {
  const router = useRouter();
  const path = usePathname();

  const [inputText, setInputText] = useState("");

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  var lookingFor = !(searchParams.get("lookingFor") === "false");
  var offering = !(searchParams.get("offering") === "false");
  var input = "";

  let inputHandler = (e) => {
    // //convert input text to lower case
    input = e.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams);
    params.set("search", input);
    router.push(path + "?" + params.toString());
  };

  let setToggle = (name, state) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, state);
    router.push(path + "?" + params.toString());
  };

  return (
    <Box className="main" marginTop={2} marginBottom={2} marginLeft={3 + "em"}>
      <Grid container>
        <Grid item xs={6} marginRight={2}>
          <Box className="search">
            <TextField
              id="search-input"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
              defaultValue={search}
            />
          </Box>
        </Grid>
        <Grid container className="filter-text-column" alignItems="center" item xs={0.8}>
          <Typography variant="p" className="filter-text">
            Searching for:
          </Typography>
        </Grid>
        <Grid container className="button-column" alignItems="center" item xs={1}>
          <ToggleButton
            id="looking-for-button"
            value={lookingFor}
            className={lookingFor ? "toggle-button-green" : "toggle-button-red"}
            onChange={() => {
              setToggle("lookingFor", !lookingFor);
            }}
          >
            Looking For
          </ToggleButton>
        </Grid>
        <Grid container className="button-column" alignItems="center" item xs={1}>
          <ToggleButton
            id="offering-button"
            value={offering}
            className={offering ? "toggle-button-green" : "toggle-button-red"}
            onChange={() => {
              setToggle("offering", !offering);
            }}
          >
            Offering
          </ToggleButton>
        </Grid>
      </Grid>
    </Box>
  );
};
