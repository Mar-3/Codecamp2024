"use client";

// Based on "Chat Component built with React and Material-UI" example by Muhammad Awais Feb 3, 2020 on medium.com
// https://medium.com/@awaisshaikh94/chat-component-built-with-react-and-material-ui-c2b0d9ccc491

import { React, useState } from "react";
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
  buttonClasses,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MockdataContext } from "../../../contexts/contexts";
import { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Snackbar } from "@mui/material";

export default function Chat() {
  const users = useContext(MockdataContext).users;
  const messagesContext = useContext(MockdataContext).messages;
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const loggedInUserID = 10;

  const [messages, setMessages] = useState(messagesContext);
  const [inputText, setInputText] = useState("");

  const [SB, setSB] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const handleSBClose = () => {
    setSB({ ...SB, open: false });
  };

  const router = useRouter();

  function selectUser(userID) {
    const params = new URLSearchParams(searchParams);
    params.set("userId", userID);
    router.push("/Chat?" + params.toString());
  }

  let inputHandler = (e) => {
    const input = e.target.value;
    setInputText(input);
  };

  function sendMessage() {
    if (inputText) {
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes();

      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }
      if (minutes.length < 2) {
        minutes = "0" + minutes;
      }

      const date = [day, month, year].join("/") + ", " + hours + ":" + minutes;

      messages.push({
        id: messages.length,
        senderID: loggedInUserID,
        recipientID: parseInt(searchParams.get("userId")),
        content: inputText,
        time: date,
      });
      setInputText("");
      setMessages(messages);
      setSB({ ...SB, open: true });
    }
  }

  return (
    <>
      <Grid container></Grid>
      <Grid container component={Paper}>
        <Grid item xs={3}>
          {userId && (
            <List>
              <ListItem key={users[userId]["id"]}>
                <ListItemIcon>
                  <Avatar
                    alt={users[userId]["nickname"]}
                    src={users[userId]["image"]}
                  />
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
            {messages.map(
              (message) =>
                ((message["senderID"] == loggedInUserID &&
                  message["recipientID"] == searchParams.get("userId")) ||
                  (message["senderID"] == searchParams.get("userId") &&
                    message["recipientID"] == loggedInUserID)) && (
                  <ListItem key={message["id"]}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align={
                            message["senderID"] == searchParams.get("userId")
                              ? "left"
                              : "right"
                          }
                          primary={message["content"]}
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align={
                            message["senderID"] == searchParams.get("userId")
                              ? "left"
                              : "right"
                          }
                          secondary={message["time"]}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                )
            )}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                value={inputText}
                onChange={inputHandler}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
            </Grid>
            <Grid item xs={1} align="right">
              <Fab color="primary" aria-label="add" onClick={sendMessage}>
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={SB.open}
        onClose={handleSBClose}
        message={"Message sent!"}
      />
    </>
  );
}
