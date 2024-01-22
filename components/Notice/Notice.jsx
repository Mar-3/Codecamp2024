"use client";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { Modal, Paper, Grid, Box, Typography, Button } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export const Notice = ({ props }) => {
  const notice = props.notice;
  const user = props.user;
  const labels =  props.labels;
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  var noticeLabels = notice.labels;

  if (!noticeLabels) {
    noticeLabels = [];
  }

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
  const type = notice.type;
  const title = notice.title;
  const author = user.nickname;
  const area = notice.area;
  const image = user.image;
  const description = notice.description;
  const id = notice.id;

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
    const params = new URLSearchParams(searchParams);
    params.set("userId", user.id)
    router.push("/Chat?" + params.toString());
  }

  let setLabel = (e) => {
    const name = labels[e.target.id]
    const params = new URLSearchParams(searchParams);
    params.delete("id");
    params.delete("labels")
    params.set("labels", '"' + name + '"')
    router.push(path + "?" + params.toString());
    }

  let setAuthor = (e) => {
    const params = new URLSearchParams(searchParams);
    params.delete("id");
    params.delete("nickname");
    params.set("nickname", '"' + author + '"')
    router.push(path + "?" + params.toString());
    }

  return (
    <Modal open={true} onClose={toggleNotice}>
      <Paper style={style} className="notice">
        <Box className="notice-content">
          <Box>
            <Grid container>
              <Grid item xs={7}>
                <Typography variant="p">{type}</Typography>
                <Typography variant="h4">{title}</Typography>
                <Grid container className="notice-author-info">
                  <Grid item xs={0.5} className="iconColumn">
                    <PersonIcon className="icon" />
                  </Grid>
                  <Grid item xs={7.5}>
                    <Typography variant="p">
                      Author:&nbsp;{" "}
                      <Button id={"author"} onClick={setAuthor}>{author}</Button>
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
                  <Grid item xs={5}>
                    <Button className="contact-btn" onClick={chatWithUser}>
                      Contact {author}
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
            </Grid>
              </Grid>
              <Grid>
              <Grid item xs={0.5}><Typography variant="p">Labels:</Typography></Grid>
              {noticeLabels.map((label) => {
              return <Grid key={'notice-'+label} item xs={0.5}><Button id={label} onClick={setLabel}>
              {label}
            </Button></Grid>;
            })}
            </Grid>
              <Grid item xs={2}>
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
              <Grid container justifyContent="flex-end" alignItems="flex-start">
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
