"use client";
import React from "react";
import { Search } from "../Search/Search";

export const FrontPage = () => {
  // Logiikkaa yms
  // Returniin kaikki renderävät komponentit ja html
  return (
    <>
      <Search props={["FrontPage"]}></Search>
    </>
  );
};
