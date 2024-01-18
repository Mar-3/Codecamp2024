'use client'
import {React, useState} from "react";
import { MockdataContext } from "../../../contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import dynamic from "next/dynamic";
import { Notice } from "@components/Notice/Notice";
import List from "@components/List/List";
import { useSearchParams } from "next/navigation";

const Map = dynamic(() => import("@components/Map/Map"));

export default function Frontpage() {

  const notices = useContext(MockdataContext)();
  const listProps = { notices }
  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
  const [list, setList] = useState(notices);

  return (
    <>
      <Search props={setList}></Search>
      <Map props={List(listProps)}></Map>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={notices[noticeId]}/>}
    </>
  )
}