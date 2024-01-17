
import { React, useState } from "react";
import { Grid, Item, H1 } from "@mui/material";
import NoticeBox from "@components/NoticeBox/NoticeBox";

export default function List({props}) {
  const notices = props;
    return (
      <>
        <Grid container justifyContent={"space-evenly"}>
          {notices.map((notice) => {
            return(<NoticeBox key={notice.id} props={notice}></NoticeBox>)
          })}
        </Grid>
      </>
    );
}

