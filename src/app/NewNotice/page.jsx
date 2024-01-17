'use client'
import { Box, FormControl, Select, MenuItem, InputLabel, TextField, Grid, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const types = [
  "Looking for...",
  "Offering...",
  "Selling...",
  "Buying..."
]

export default function NewNotice() {

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [ingress, setIngress] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit() {
    const newNotice = {
      title:title,
      type:type,
      ingress:ingress,
      description:description,
      nickname:"placeholder",
      area: "skinnarila",
      timedate: new Date.now(),
      location: "asdf"
    }


  }

  return (
    <>
    <h1>NEW NOTICE</h1>
    <Box component="form" noValidate autoComplete="off" > 
      <Grid container alignContent="space-evenly" justifyContent={"space-evenly"}>
        <Grid item xs={12}>
        <FormControl>
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
          labelId="type-select"
          value={type}
          label="Type"
          onChange={(event) => {setType(event.target.value)}}
          sx={{width:"10rem"}}      >
            {types.map((el) => {
              return (
                <MenuItem key={el} value={el}>{el}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl>
          <TextField label="Title" value={title}  type="text"
          onChange={(event) => {setTitle(event.target.value)}}>
            Notice title
          </TextField>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl>
          <TextField label="Ingress" value={ingress}  type="textfield"
            onChange={(event) => {setIngress(event.target.value)}}>
            Notice ingress
          </TextField>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl>
          <TextField multiline label="Description" value={description}  type="text" rows={4}
            onChange={(event) => {setDescription(event.target.value)}}>
            Notice Description
          </TextField>
        
        </FormControl>
        </Grid>
        <Button value="Submit">Post New Notice!</Button>

    </Grid>
    </Box>
    </>
  )
}