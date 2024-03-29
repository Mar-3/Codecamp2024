'use client'
import {React, useState} from "react";
import { MockdataContext, FiltersContext } from "../../../contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import dynamic from "next/dynamic";
import { Notice } from "@components/Notice/Notice";
import List from "@components/List/List";
import { useSearchParams } from "next/navigation";
import { NoticesContext, useNoticesContext } from "@contexts/NoticesContext";

const Map = dynamic(() => import("@components/Map/Map"), {
  ssr: false
});

export default function Frontpage() {

  const {notices, setNotices} = useNoticesContext();
  const users = useContext(MockdataContext).users;
  const filters = useContext(FiltersContext)();
  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
  return (
    <>
      <Search props={{"filters": filters}}></Search>
      <Map props={List({"props": {"notices": notices, "users": users, "filters": filters}})}></Map>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={{"notice": notices[noticeId], "user": users[notices[noticeId]["userID"]], "labels": filters["labels"]["options"]}}/>}
    </>
  )
}