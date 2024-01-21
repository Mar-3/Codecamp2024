'use client'
import {React, useEffect, useState} from "react";
import { MockdataContext, FiltersContext } from "@contexts/contexts"
import { useContext } from "react";
import { Search } from "@components/Search/Search";
import { Notice } from "@components/Notice/Notice";
import List from "@components/List/List";
import { useSearchParams } from "next/navigation";
import {NoticesContext, useNoticesContext} from "@contexts/NoticesContext.jsx";

export default function Frontpage() {

  const users = useContext(MockdataContext).users;
  const filters = useContext(FiltersContext)();
  
  const {notices} = useNoticesContext();

  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");
  
 
  return (
    <>
      <Search props={{"filters": filters}}></Search>
      <List props={{"notices": notices, "users": users, "filters": filters}}></List>
      {!noticeId ? null : <Notice sx={{position:'static'}} props={{"notice": notices[noticeId], "user": users[notices[noticeId]["userID"]], "labels": filters["labels"]["options"]}}/>}
    </>
  )
}