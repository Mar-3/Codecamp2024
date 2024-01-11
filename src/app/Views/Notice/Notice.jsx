"use client";
import React, { useState } from "react";
import "./Notice.css";
import Grid from "@mui/material/Grid";

export const Notice = ({props}) => {
  var distance = 800; // In meters
  if (distance >= 1000) {
    distance = (distance / 1000).toFixed(1);
    var unit = "km";
  } else {
    var unit = "m";
  }
  const type = props.type
  const title = props.title
  const author = props.nickname;
  const area = props.area;
  const profile_pic_url = "./profile_picture.png";
  const description = props.description;

  const [isOpen, setIsOpen] = useState(false);

  const toggleNotice = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleNotice}>Open Notice</button>
      {isOpen && (
        <div className="notice">
          <div className="notice-content">
            <button className="close-btn" onClick={toggleNotice}>
              Close
            </button>
            <div>
              <p>{type}</p>
              <h2>{title}</h2>
              <Grid container>
                <Grid item xs={6}>
                  <p>Author: {author}</p>
                  <p>In {area}</p>
                  <p>
                    ~{distance} {unit} from your location
                  </p>
                </Grid>
                <Grid item xs={6}>
                  {profile_pic_url && (
                    <img src={profile_pic_url} alt="User's profile picture" />
                  )}
                </Grid>
              </Grid>
            </div>
            <br></br>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
