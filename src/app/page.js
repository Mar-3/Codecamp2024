"use client";
import React from "react";
import { MockdataContext } from "../../contexts/contexts";
import { Navbar } from "../../ui/Navbar";

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
