"use client";
import { React } from "react";
import "../../src/app/globals.css";
import NoticeBox from "../NoticeBox/NoticeBox";
import { usePathname, useSearchParams } from "next/navigation";
import { Grid, Typography } from "@mui/material";

export default function List({ props }) {
  const notices = props.notices;
  const filters = props.filters;
  const path = usePathname();
  const searchParams = useSearchParams();
  const input = searchParams.get("search") ?? "";

  function checkFilters(notice) {
    var passFilter = true;
    for (var i in Object.keys(filters)) {
      var filterName = String(Object.keys(filters)[i]);
      var filterType = String(filters[filterName]["style"]);
      var noticeValue = notice[filterName];
      if (filterType === "exclude") {
        var urlLabel = filters[filterName]["options"][noticeValue];
        if (searchParams.get(urlLabel) === "false") {
          passFilter = false;
        }
      } else if (filterType === "include") {
        var urlFilterValue = searchParams.get(filterName);
        if (urlFilterValue) {
          var filterValue = urlFilterValue ? urlFilterValue.split(",") : [];
          if (!filterValue.includes(noticeValue)) {
            passFilter = false;
          }
        }
      }
    }
    return passFilter;
  }

  //create a new array by filtering the original array
  const filteredData = notices.filter((el) => {
    //if no input the return the original
    if (typeof input === "string" && input.length === 0) {
      return checkFilters(el);
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(input) && checkFilters(el);
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
      return (
        <Typography variant="h4" marginLeft={2 + "em"}>
          No search results
        </Typography>
      );
    }
  } else {
    return filteredData;
  }
}
