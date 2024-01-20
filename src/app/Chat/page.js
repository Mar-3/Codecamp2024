"use client";
import React from "react";
import {
  Divider,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Fab,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MockdataContext } from "../../../contexts/contexts";
import { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Chat() {
  const users = useContext(MockdataContext)("users");
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const router = useRouter();

  function selectUser(userID) {
    const params = new URLSearchParams(searchParams);
    params.set("userId", userID);
    router.push("/Chat?" + params.toString());
  }

  return (
    <>
      <Grid container></Grid>
      <Grid container component={Paper}>
        <Grid item xs={3}>
          {userId && (
            <List>
              <ListItem key="RemySharp">
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src={users[userId]["image"]} />
                </ListItemIcon>
                <ListItemText
                  primary={users[userId]["nickname"]}
                ></ListItemText>
              </ListItem>
            </List>
          )}
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {Object.entries(users).map(
              (user) =>
                user[1]["id"] != searchParams.get("userId") && (
                  <ListItem
                    key={user[1]["id"]}
                    onClick={() => selectUser(user[1]["id"])}
                  >
                    <ListItemIcon>
                      <Avatar
                        alt={user[1]["nickname"]}
                        src={user[1]["image"]}
                      />
                    </ListItemIcon>
                    <ListItemText primary={user[1]["nickname"]}>
                      {user[1]["nickname"]}
                    </ListItemText>
                    <ListItemText
                      secondary="online"
                      align="right"
                    ></ListItemText>
                  </ListItem>
                )
            )}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, Iam Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="10:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
