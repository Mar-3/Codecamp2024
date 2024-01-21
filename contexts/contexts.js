'use client'
import { createContext } from "react";
import mockdata from "../mockdata.js";
import filters from "../searchConfig.js";


export const MockdataContext = createContext(mockdata);
export const FiltersContext = createContext(filters)