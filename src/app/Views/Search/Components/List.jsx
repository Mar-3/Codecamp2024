import { React, useState } from "react";
import "../Search.css";
import { mockdata } from "@/app/mockdata";
import { Grid, Item } from "@mui/material";
import { NoticeBox } from "../../NoticeBox/NoticeBox";

function List(props) {
    const includeLookingFor = props.includeLookingFor;
    const includeOffering = props.includeOffering;
  //create a new array by filtering the original array
  const filteredData = mockdata.notices.filter((el) => {
    //if no input the return the original
    console.log(includeLookingFor);
    if (props.input === "") {
      return ((el.type === "Looking for..." && includeLookingFor) || (el.type === "Offering..." && includeOffering));
    }
    //return the item which contains the user input
    else {
      return (el.title.toLowerCase().includes(props.input) && ((el.type === "Looking for..." && includeLookingFor) || (el.type === "Offering..." && includeOffering)));
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
