'use client'
import React from "react";
import { FormControl, StyledInput, HelperText, Label , Button} from "@mui/material"

export const Login = ({props}) => {
  const setLoggedIn = props[0];
  // Logiikkaa yms

  // Returniin kaikki renderävät komponentit ja html
  return (
    <>
        <h1>LOGIN page</h1>
        <Button size="large" onClick={() => {
          setLoggedIn(true);
        }}>LOGIN</Button>
    </>
  )
}