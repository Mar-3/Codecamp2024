'use client'
import { createContext } from "react";
import notices from "../mockdata.js";
import filters from "../searchConfig.js";

export const MockdataContext = createContext(notices);
export const FiltersContext = createContext(filters)