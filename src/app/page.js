"use client";
import React, { createContext, useCallback } from "react";
import { MockdataContext } from "@contexts/contexts";
import mockdata from "@mockdata";
import NoticesContext from "@contexts/NoticesContext";
import NoticesProvider from "@contexts/NoticesContext";

export default function App({children}) {


  return (
    <>
        <MockdataContext.Provider>
            <main style={{height:"100%", width:"100%"}}>
              {children}
            </main>      
        </MockdataContext.Provider>
    </>
  );
}
