"use client";
import { React, useState } from "react";
import "../../src/app/globals.css";
import { Grid, Item } from "@mui/material";
import NoticeBox from "../NoticeBox/NoticeBox";
import { useSearchParams } from "next/navigation";

export default function List({ notices }) {
  const searchParams = useSearchParams();
  const input = searchParams.get("search") ?? "";
  const includeLookingFor = !(searchParams.get("lookingFor") === "false");
  const includeOffering = !(searchParams.get("offering") === "false");

  //create a new array by filtering the original array
  const filteredData = notices.filter((el) => {
    //if no input the return the original
    if (typeof input === "string" && input.length === 0) {
      return (
        (el.type === "Looking for..." && includeLookingFor) ||
        (el.type === "Offering..." && includeOffering)
      );
    }
    //return the item which contains the user input
    else {
      return (
        el.title.toLowerCase().includes(input) &&
        ((el.type === "Looking for..." && includeLookingFor) ||
          (el.type === "Offering..." && includeOffering))
      );
    }
  });
  if (filteredData && filteredData.length > 0) {
    return (
      <>
        <Grid container spacing={3}>
          {filteredData.map((notice) => {
            return <NoticeBox props={notice}></NoticeBox>;
          })}
        </Grid>
      </>
    );
  } else {
    return <h2>No search results</h2>;
  }
}