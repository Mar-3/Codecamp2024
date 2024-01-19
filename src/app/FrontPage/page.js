'use client'
import {React, useEffect, useState} from "react";
import { MockdataContext, FiltersContext } from "../../../contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import { Notice } from "@components/Notice/Notice";
import List from "@components/List/List";
import { useSearchParams } from "next/navigation";

export default function Frontpage() {

  const notices = useContext(MockdataContext)();
  const filters = useContext(FiltersContext)();

  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
  const [list, setList] = useState(notices);
  const [openedNotice, setOpenedNotice] = useState(null);

 
  return (
    <>
      <Search props={{"filters": filters}}></Search>
      <List props={{"notices": list, "filters": filters}}></List>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={notices[noticeId]}/>}
    </>
  )
}