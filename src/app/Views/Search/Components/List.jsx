import { React, useState } from "react";
import "../Search.css";
import { mockdata } from "@/app/mockdata";
import { Grid, Item } from "@mui/material";
import { NoticeBox } from "../../NoticeBox/NoticeBox";

function List(props) {
  //create a new array by filtering the original array
  const filteredData = mockdata.notices.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(props.input);
    }
  });
  if (props) {
    if (filteredData && filteredData.length > 0) {
      return (
        <>
          <Grid container spacing={3}>
            {filteredData.map((notice) => {
              return <NoticeBox key={notice.id} props={notice}></NoticeBox>;
            })}
          </Grid>
        </>
      );
    } else {
      return <h2>No search results</h2>;
    }
  }
}

export default List;
