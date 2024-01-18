"use client";
import { React } from "react";
import "../../src/app/globals.css";
import NoticeBox from "../NoticeBox/NoticeBox";
import { usePathname, useSearchParams } from "next/navigation";
import { Grid, Typography} from "@mui/material";

export default function List({ notices }) {
  const path = usePathname();
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
  if (path === "/FrontPage") {
    if (filteredData && filteredData.length > 0) {
      return (
        <>
          <Grid container spacing={3} marginLeft={1 + "em"}>
            {filteredData.map((notice) => {
              return <NoticeBox props={notice}></NoticeBox>;
            })}
          </Grid>
        </>
      );
    } else {
      return <Typography variant="h4" marginLeft={2 + "em"}>No search results</Typography>;
    }
  } else {
    return(filteredData)
  }
}
