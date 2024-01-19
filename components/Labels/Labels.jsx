"use client";
import { React } from "react";
import "../../src/app/globals.css";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormControl
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Labels = ({ props }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const labels = props.labels;
  const title = props.title

  const noTypeSelected =
    Object.values(labels).filter((v) => isChecked(v)).length === 0;

  let setToggle = (name, state) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, state);
    router.push(path + "?" + params.toString());
  };

  function isChecked(name) {
    return !(searchParams.get(name) === "false");
  }

  return (
    <Grid container className="button-column" alignItems="center" item xs={1.2}>
      <FormControl
        required
        error={noTypeSelected}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">{title}</FormLabel>
        <FormGroup>
          {
            Object.entries(labels).map(([shownLabel, urlLabel], i) => (
              <FormControlLabel
                control={<Checkbox checked={isChecked(String(urlLabel))} />}
                label={shownLabel}
                onChange={() => {
                  setToggle(urlLabel, !isChecked(urlLabel));
                }}
              />
            ))
          }
        </FormGroup>
      </FormControl>
    </Grid>
  );
};
