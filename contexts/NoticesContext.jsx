"use client"
import mockdata from "@mockdata";
import { createContext, useState, useMemo, useContext } from "react"


const NoticesContext = createContext({});

export default function NoticesProvider({children}) {

  const [notices, setNotices] = useState(mockdata.notices);
  

  return(
    <NoticesContext.Provider value={{notices, setNotices}}>
    {children}
    </NoticesContext.Provider>
  )
}

export function useNoticesContext() {
  return useContext(NoticesContext);
}

