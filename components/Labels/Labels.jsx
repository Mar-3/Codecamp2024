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
  Box,
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
      if (state) {
        params.delete(name);
      } else {
        params.set(name, state);
      }
      router.push(path + "?" + params.toString());
    } else {
      var urlFilterValue = searchParams.get(key);
      if (urlFilterValue || (urlFilterValue === "")) {
        if (state) {
          params.set(key, urlFilterValue + ',"' + name + '"');
        } else {
          if (urlFilterValue.includes('"' + name + '"')) {
            params.set(
              key,
              urlFilterValue
                .replace('"' + name + '"', "")
                .replace(/(^,)|(,$)/g, "").replace(",,", ",")
            );
          }
        }
        router.push(path + "?" + params.toString());
      } else {
        var urlFilterValue = "";
        for (var i in Object.values(labels)) {
          if ((Object.values(labels)[i] != name) && (Object.values(labels)[i] != null)) {
            if (urlFilterValue === "") {
              urlFilterValue = '"' + Object.values(labels)[i] + '"'
            }
            else {
              urlFilterValue = urlFilterValue + ',"' + Object.values(labels)[i] + '"';
            }
          }
          params.set(key, urlFilterValue)
        }
        router.push(path + "?" + params.toString());
      }
    }
  };

  function isChecked(name) {
    if (style === "exclude") {
      return !(searchParams.get(name) === "false");
    } else {
      var urlFilterValue = searchParams.get(key);
      if (Object.is(urlFilterValue, "")) {
        return false;
      } else if (urlFilterValue) {
        var filterValue = urlFilterValue ? urlFilterValue.split(",") : [];
        return filterValue.includes('"' + name + '"');
      } else {
        return true;
      }
    }
  }

  function countSelected() {
    if (isAllSelected()) {
      return "";
    }
    var urlFilterValue = searchParams.get(key);
    var count = 0;
    if (urlFilterValue) {
      var filterValue = urlFilterValue ? urlFilterValue.split(",") : [];
      for (var value in filterValue) {
        if (filterValue[value] != "") {
          count += 1;
        }
      }
    }
    if (count > 0) {
      return " - " + String(count) + " selected";
    } else {
      return ", None selected!";
    }
  }

  function isAllSelected() {
    if (style === "exclude") {
      if (
        Object.values(labels).filter((v) => isChecked(v)).length ===
          Object.keys(labels).length
      ) {
        return true;
      } else {
        return false;
      }
    }
    else if (
      Object.values(labels).filter((v) => isChecked(v)).length ===
        Object.keys(labels).length ||
      searchParams.get(key) === null
    ) {
      return true;
    } else {
      return false;
    }
  }

  function toggleAll() {
    const params = new URLSearchParams(searchParams);
    if (style === "exclude") {
      if (isAllSelected()) {
        for (var i in Object.values(labels)) {
          params.set(Object.values(labels)[i], false);
        }
      } else {
        for (var i in Object.values(labels)) {
          params.delete(Object.values(labels)[i]);
        }
      }
    } else {
      if (isAllSelected()) {
        params.set(key, "");
      } else {
        params.delete(key);
      }
    }
    router.push(path + "?" + params.toString());
  }

  return (
    <>
      {style === "exclude" && (
        <Grid
          container
          item
          xs={6}
          height="4rem"
          display="flex"
          flexDirection="row"
          className="button-column"
          justifyContent="flex-start"
          alignContent="flex-start"
        >
          <FormControl
            item
            xs={12}
            required
            error={noTypeSelected}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend">{title}</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={isAllSelected()} />}
                label="All"
                onChange={() => {
                  toggleAll();
                }}
              />
              {Object.entries(labels).map(([shownLabel, urlLabel], i) => (
                <Grid
                  component={Box}
                  item
                  height="10rem"
                  xs={12}
                  key={"typelabel-" + urlLabel}
                >
                  <FormControlLabel
                    control={<Checkbox checked={isChecked(String(urlLabel))} />}
                    label={shownLabel}
                    onChange={() => {
                      setToggle(urlLabel, !isChecked(urlLabel));
                    }}
                  />
                </Grid>
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
              <Typography>{title + String(countSelected())}</Typography>
            </AccordionSummary>
            <FormControl
              required
              error={noTypeSelected}
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard"
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={isAllSelected()} />}
                  label="All"
                  onChange={() => {
                    toggleAll();
                  }}
                />
                {Object.entries(labels).map(([shownLabel, urlLabel], i) => (
                  <FormControlLabel
                    key={"labels2-" + shownLabel}
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
