'use client'
import React from "react";
import { FormControl, StyledInput, HelperText, Label , Button} from "@mui/material"

export const Login = ({props}) => {
  const setLoggedIn = props[0];
  const setView = props[1];
  // Logiikkaa yms

  // Returniin kaikki renderävät komponentit ja html
  return (
    <>
        <h1>LOGIN page</h1>
        <Button size="large" onClick={() => {
          setLoggedIn(true);
          setView('Base');
        }}>LOGIN</Button>
    </>
  )
}