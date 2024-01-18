"use client";
import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { Modal, Paper } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Notice = ({ props }) => {

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    padding: '3rem',
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
      router.push(path + '?' + params.toString());
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <Modal open={true} onClose={toggleNotice}>
        <Paper style={style} className="notice" aligncontent="space-between">
          <Box className="notice-content">
            <Box>
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
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br></br>
            <p>{description}</p>
          </Box>
        </Paper>
    </Modal>
  );
};
