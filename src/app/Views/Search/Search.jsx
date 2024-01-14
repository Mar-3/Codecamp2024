'use client'
import { React, useState } from "react";
import "./Search.css";
import TextField from "@mui/material/TextField";
import List from "./Components/List";

export const Search = ({props}) => {
  const [inputText, setInputText] = useState("");
  const view = props[0];
  let inputHandler = (e) => {
    e.preventDefault();
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  if (view.toString() === "FrontPage") {
    return (
        <div className="main">
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          <List input={inputText} />
        </div>
      );
  }
}