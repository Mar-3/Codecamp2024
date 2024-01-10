"use client";
import React, { useState } from "react";
import "./Notice.css";
import Grid from "@mui/material/Grid";

export const Notice = () => {
  var distance = 800; // In meters
  if (distance >= 1000) {
    distance = (distance / 1000).toFixed(1);
    var unit = "km";
  } else {
    var unit = "m";
  }
  const type = "Looking for...";
  const title = "Title of the notice";
  const author = "Author of the notice";
  const area = "Skinnarila";
  const profile_pic_url = "./profile_picture.png";
  const description =
    "Additional information and description related to the notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat efficitur felis, ut feugiat justo cursus et. Maecenas dapibus dictum eros vel lacinia. Proin suscipit posuere purus vitae eleifend. Maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. Aliquam eleifend dictum iaculis. Nunc placerat tortor orci, id commodo nisl pulvinar mattis. Duis a sem consequat eros ornare feugiat. Proin tempor arcu feugiat dignissim maximus. Pellentesque tincidunt congue odio, ac gravida nulla. Aliquam eu iaculis massa. Donec vitae dui ut eros fermentum suscipit quis id nibh. Proin et posuere libero. Suspendisse potenti. Nulla ornare viverra massa sed molestie. Fusce dignissim tellus scelerisque aliquam efficitur.";

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
