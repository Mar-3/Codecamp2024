"use client";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Grid,
  Button,
  Paper,
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNoticesContext } from "@contexts/NoticesContext";
import { FiltersContext } from "@contexts/contexts";
import dynamic from "next/dynamic";

const LocationSelect = dynamic(
  () => import("@components/LocationSelect/LocationSelect.js"),
  {
    ssr: false,
  }
);

export default function NewNotice() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Looking for...");
  const [ingress, setIngress] = useState("");
  const [description, setDescription] = useState("");
  const [coords, setCoords] = useState([61.0631, 28.0982]);
  const [area, setArea] = useState("Skinnarila");
  const [labels, setLabel] = useState(["Sport"]);

  const filters = useContext(FiltersContext)();
  const types = Object.keys(filters.type.options);
  const labelList = Object.keys(filters.labels.options);
  const areas = Object.keys(filters.area.options);

  const { notices, setNotices } = useNoticesContext();

  function handleSubmit() {
    const newNotice = {
      area: "Skinnarila",
      id: notices.length,
      title: title,
      type: type,
      ingress: ingress,
      description: description,
      userID: 0,
      nickname: "placeholder22",
      timedate: Date.now(),
      location: coords,
      labels: ["Sports", "Muscic"],
    };

    const updatedNotices = notices;
    updatedNotices.push(newNotice);
    setNotices(updatedNotices);
    console.log(notices);
  }

  return (
    <>
      <Box
        display="flex"
        noValidate
        minHeight="70vh"
        autoComplete="off"
        alignItems="center"
      >
        <Grid
          container
          padding="10rem"
          component={Paper}
          direction="row"
          justifyContent="baseline"
          alignContent="center"
          spacing={3}
          marginLeft="20%"
          marginRight="20%"
          marginTop="5%"
        >
          <Typography alignSelf={"center"} variant={"h4"}>
            New Notice
          </Typography>

          <Grid item xs={12} padding={0}>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select"
              value={type}
              label="Type"
              onChange={(event) => {
                setType(event.target.value);
              }}
              sx={{ width: "10rem" }}
            >
              {types.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              value={title}
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            >
              Notice title
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ingress"
              value={ingress}
              type="textfield"
              onChange={(event) => {
                setIngress(event.target.value);
              }}
            >
              Notice ingress
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              label="Description"
              value={description}
              type="text"
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            >
              Notice Description
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              value={area}
              onChange={(e, value) => {
                setArea(value);
              }}
              options={areas}
              renderInput={(params) => <TextField {...params} label="Area" />}
            />

            <Grid item xs={12}>
              <Typography component={"h5"}>
                Location:
                {"["}
                {coords[0]}, {coords[1]}
                {"]"}
              </Typography>
            </Grid>
            <LocationSelect coords={coords} setCoords={setCoords} />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="size-small-outlined-multi"
              size="medium"
              options={labelList}
              getOptionLabel={(option) => option}
              defaultValue={labels}
              onChange={(e, value) => {
                setLabel(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Size small"
                  placeholder="Favorites"
                />
              )}
            />
          </Grid>
          <Grid item alignSelf="center">
            <Button variant="contained" onClick={handleSubmit}>
              Post New Notice!
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
