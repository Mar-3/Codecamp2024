"use client";
import { React } from "react";
import "../../src/app/globals.css";
import NoticeBox from "../NoticeBox/NoticeBox";
import { usePathname, useSearchParams } from "next/navigation";
import { Grid, Typography } from "@mui/material";

export default function List({ props }) {
  const notices = props.notices;
  const users = props.users;
  const filters = props.filters;
  const path = usePathname();
  const searchParams = useSearchParams();
  const input = searchParams.get("search") ?? "";

  function checkFilters(notice) {
    for (var i in Object.keys(filters)) {
      var filterName = String(Object.keys(filters)[i]);
      var filterType = String(filters[filterName]["style"]);
      if (notice.hasOwnProperty(filterName)) {
        var noticeValue = notice[filterName];
      } else if (users[notice["userID"]].hasOwnProperty(filterName)) {
        var noticeValue = users[notice["userID"]][filterName];
      } else {
        return false;
      }
      if (filterType === "exclude") {
        var urlLabel = filters[filterName]["options"][noticeValue];
        if (searchParams.get(urlLabel) === "false") {
          return false;
        }
      } else if (filterType === "include") {
        var urlFilterValue = searchParams.get(filterName);
        if (urlFilterValue === "") {
          return false;
        }
        if (urlFilterValue) {
          var filterValue = urlFilterValue ? urlFilterValue.split(",") : [];
          //console.log(filterValue)
          if (Array.isArray(noticeValue)) {

            noticeValue = noticeValue.map((item) => '"' + filters[filterName]["options"][item] + '"');
            console.log(noticeValue)
            console.log(filterValue)
            if (
              filterValue.filter((item) => noticeValue.includes(item)).length === 0
            ) {
              return false
            }
          }
          else if (!filterValue.includes('"' + noticeValue + '"')) {
            return false
          }
        }
        else {
        }
      }
    }
    return true;
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
