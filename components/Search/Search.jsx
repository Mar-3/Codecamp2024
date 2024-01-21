"use client";
import { React } from "react";
import TextField from "@mui/material/TextField";
import "../../src/app/globals.css";
import { Labels } from "@components/Labels/Labels";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Search = ({ props }) => {
  const filters = props.filters;
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  var input = "";
  let inputHandler = (e) => {
    // //convert input text to lower case
    input = e.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams);
    params.set("search", input);
    router.push(path + "?" + params.toString());
  };

  return (
    <Box className="main" marginTop={2} marginBottom={2} marginLeft={3 + "em"}>
      <Grid container>
        <Grid container item xs={6} marginRight={2} alignItems="center">
          <Box className="search" width={100 + "%"}>
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
        <Grid
          container
          className="filter-text-column"
          alignItems="center"
          item
          xs={0.8}
        >
          <Typography variant="p" className="filter-text">
            Searching for:
          </Typography>
        </Grid>
        {Object.entries(filters).map(
          ([filterName, filter], i) =>
            filter["style"] === "exclude" && (
              <Labels key={'labels2-'+filter.title}
                props={{
                  title: filter["title"],
                  labels: filter["options"],
                  style: filter["style"],
                }}
              />
            )
        )}
      </Grid>
      <Grid container item xs={6} marginLeft={2} marginRight={2}>
        {Object.entries(filters).map(
          ([filterName, filter], i) =>
            filter["style"] === "include" && (
              <Labels key={'labels3-'+filter.title}
                props={{
                  key: filterName,
                  title: filter["title"],
                  labels: filter["options"],
                  style: filter["style"],
                }}
              />
            )
        )}
      </Grid>
    </Box>
  );
};
