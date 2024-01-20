"use client";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { Modal, Paper, Grid, Box, Typography, Button } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export const Notice = ({ props }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: "3rem",
  };

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

  const [error, setError] = useState(false);

  const toggleNotice = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("id");
    router.push(path + "?" + params.toString());
  };

  const handleImageError = () => {
    setError(true);
  };

  const chatWithUser = () => {
    router.push("/Chat?" + searchParams)
  }

  return (
    <Modal open={true} onClose={toggleNotice}>
      <Paper style={style} className="notice" justifyContent="space-between">
        <Box className="notice-content">
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
                    <Typography variant="p" display="block">
                      In {area}
                    </Typography>
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
                    <Button className="contact-btn" onClick={chatWithUser}>
                      Contact {author}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
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
              <Grid container justifyContent="flex-end" alignItems="flex-start" xs={1}>
                <Button onClick={toggleNotice}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="p">{description}</Typography>
        </Box>
      </Paper>
    </Modal>
  );
};
