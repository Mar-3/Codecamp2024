'use client'
import React from "react";
import { useState } from "react";
import { FormControl, StyledInput, HelperText, Label, useScrollTrigger } from "@mui/material"

export const Register = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [area, setarea] = useState('');

  return (
    <>
      <h1>
        Register page
      </h1>
      <form>           <br/>
          <label>E-Mail 
            <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
          </label>
          
          <br/>
          <label>Username 
            <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
          </label>
          <br/>
          <br/>
          <label>Password
            <input type="password" onChange={e => setPassword(e.target.value)} name="password"/>
          </label>
          <br/>
          <br/>  
          <label>Area
            <input type="text" onChange={e => setArea(e.target.value)} name="area"/>
          </label>
          <br/>
          <input type="button" value="Register" onClick={() => {
            const userDetails = handleLogin(username, password);
            setLoggedIn(userDetails);
            setView("Profile")}}/>
        </form>
    </>
  )
}