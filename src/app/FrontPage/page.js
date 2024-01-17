'use client'
import {React, useEffect, useState} from "react";
import { MockdataContext } from "../../../contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import { Notice } from "@components/Notice/Notice";
import List from "@components/List/List";
import { useSearchParams } from "next/navigation";

export default function Frontpage() {

  const notices = useContext(MockdataContext)();

  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
  const [list, setList] = useState(notices);
  const [openedNotice, setOpenedNotice] = useState(null);


  return (
    <>
      <Search props={setList}></Search>
      <List props={list}></List>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={notices[noticeId]}/>}
    </>
  )
}