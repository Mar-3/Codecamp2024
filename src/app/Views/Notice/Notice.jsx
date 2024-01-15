"use client";
import React, { useState } from "react";
import "./Notice.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

export const Notice = ({ props }) => {
  var distance = 800; // In meters
  if (distance >= 1000) {
    distance = (distance / 1000).toFixed(1);
    var unit = "km";
  } else {
    var unit = "m";
  }
  const type = props.type;
  const title = props.title;
  const author = props.nickname;
  const area = props.area;
  const image = props.image;
  const description = props.description;

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const toggleNotice = () => {
    setIsOpen(!isOpen);
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleNotice}>Open Notice</Button>
      {isOpen && (
        <div className="notice" alignContent="space-between" z-index={10}>
          <div className="notice-content">
            <button className="close-btn" onClick={toggleNotice}>
              Close
            </button>
            <div>
              <Grid container>
                <Grid item xs={8}>
                  <p>{type}</p>
                  <h2>{title}</h2>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <PersonIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                      <p className="author-profile-btn">
                        Author:&nbsp; {" "}
                        <button
                          onClick={toggleNotice}
                        >
                          {author}
                        </button>
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <PlaceIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                      <p>In {area}</p>
                      <p>
                        ~{distance} {unit} from your location
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <MessageIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                      <button className="contact-btn" onClick={toggleNotice}>
                        Contact {author}
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="profile-pic"
                  >
                    {error ? (
                      <Image
                        src="/profile_picture.png"
                        width={160}
                        height={160}
                        alt="User's profile picture"
                      />
                    ) : (
                      <Image
                        src={image}
                        width={160}
                        height={160}
                        alt="User's profile picture"
                        onError={handleImageError}
                      />
                    )}
                  </Box>
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
