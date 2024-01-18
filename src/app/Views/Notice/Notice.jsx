"use client";
import React, { useState } from "react";
import "./Notice.css";
import { Grid, Box, Typography, Button } from "@mui/material";
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
    <Box>
      <Button variant="outlined" onClick={toggleNotice}>
        Open Notice
      </Button>
      {isOpen && (
        <Box
          className="notice"
          alignContent="space-between"
          style={{ zIndex: 10 }}
        >
          <Box className="notice-content">
            <Button className="close-btn" onClick={toggleNotice}>
              Close
            </Button>
            <Box>
              <Grid container>
                <Grid item xs={8}>
                <Typography variant="p">{type}</Typography>
                <Typography variant="h4">{title}</Typography>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <PersonIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                    <Typography variant="p">
                        Author:&nbsp;{" "}
                        <Button onClick={toggleNotice}>{author}</Button>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <PlaceIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                    <Typography variant="p" display="block">In {area}</Typography>
                    <Typography variant="p">
                        ~{distance} {unit} from your location
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="notice-author-info">
                    <Grid item xs={0.5} className="iconColumn">
                      <MessageIcon className="icon" />
                    </Grid>
                    <Grid item xs={7.5}>
                      <Button className="contact-btn" onClick={toggleNotice}>
                        Contact {author}
                      </Button>
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
            </Box>
            <Typography variant="p">{description}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
