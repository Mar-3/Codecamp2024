"use client";
import { React } from "react";
import "../../src/app/globals.css";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Labels = ({ props }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const key = props.key;
  const labels = props.labels;
  const title = props.title;
  const style = props.style;

  const noTypeSelected =
    Object.values(labels).filter((v) => isChecked(v)).length === 0;

  let setToggle = (name, state) => {
    const params = new URLSearchParams(searchParams);
    if (style === "exclude") {
      params.set(name, state);
      router.push(path + "?" + params.toString());
    } else {
      // Always including commas on both sides of the filter url key to ensure names including other names don't get mistaken for each other
      var urlFilterValue = searchParams.get(key);
      if (urlFilterValue) {
        if (state) {
          params.set(key, urlFilterValue + "," + name + ",");
        } else {
          if (urlFilterValue.includes("," + name + ",")) {
            params.set(key, urlFilterValue.replace("," + name + ",", ""));
          }
        }
        router.push(path + "?" + params.toString());
        if (params.get(key) === "") {
          params.delete(key);
          router.push(path + "?" + params.toString())
        }
      } else {
        params.set(key, "," + name + ",");
        router.push(path + "?" + params.toString());
      }
    }
  };

  function isChecked(name) {
    if (style === "exclude") {
      return !(searchParams.get(name) === "false");
    } else {
      var urlFilterValue = searchParams.get(key);
      if (urlFilterValue) {
        var filterValue = urlFilterValue ? urlFilterValue.split(",") : [];
        return filterValue.includes(name);
      } else {
        return true;
      }
    }
  }

  return (
    <>
      {style === "exclude" && (
        <Grid
          container
          className="button-column"
          alignItems="center"
          item
          xs={1.2}
        >
          <FormControl
            required
            error={noTypeSelected}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend">{title}</FormLabel>
            <FormGroup>
              {Object.entries(labels).map(([shownLabel, urlLabel], i) => (
                <FormControlLabel
                  control={<Checkbox checked={isChecked(String(urlLabel))} />}
                  label={shownLabel}
                  onChange={() => {
                    setToggle(urlLabel, !isChecked(urlLabel));
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      )}
      {style === "include" && (
        <Grid marginLeft={2} marginRight={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <FormControl
            required
            error={noTypeSelected}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormGroup>
              {Object.entries(labels).map(([shownLabel, urlLabel], i) => (
                <FormControlLabel
                  control={<Checkbox checked={isChecked(String(urlLabel))} />}
                  label={shownLabel}
                  onChange={() => {
                    setToggle(urlLabel, !isChecked(urlLabel));
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Accordion>
        </Grid>
      )}
    </>
  );
};
