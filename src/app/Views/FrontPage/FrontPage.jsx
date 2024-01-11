'use client'
import React from "react";
import { Grid, Item } from "@mui/material";
import { mockdata } from "@/app/mockdata";
import { NoticeBox } from "../NoticeBox/NoticeBox";

export const FrontPage = () => {
  // Logiikkaa yms
  // Returniin kaikki renderävät komponentit ja html
  console.log(mockdata.notices[0].title)
  return (
    <>
      <Grid container spacing={3}>
        {mockdata.notices.map((notice) => {return (
          <NoticeBox key={notice.title} props={notice}></NoticeBox>)
        })}
        <NoticeBox props={mockdata.notices[0]}/>

      </Grid>  
      <h2>BOTTOM TEXT</h2>
    </>
  )
}