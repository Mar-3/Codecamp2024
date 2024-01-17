'use client'
import {React, useState} from "react";
import { MockdataContext } from "../../../contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import dynamic from "next/dynamic";
import { Notice } from "@components/Notice/Notice";
import { useSearchParams } from "next/navigation";

const Map = dynamic(() => import("@components/Map/Map"));

export default function Frontpage() {

  const notices = useContext(MockdataContext)();
  
  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
  const [list, setList] = useState(notices);

  return (
    <>
      <Search props={setList}></Search>
      <Map props={list}></Map>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={notices[noticeId]}/>}
    </>
  )
}