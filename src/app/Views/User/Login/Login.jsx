'use client'
import React from "react";
import { useState } from "react";


function handleLogin(username, password) {
  const userDetails = {username: username, password: password};
  return (userDetails);
}



export const Login = ({props}) => {
  console.log(props);
  const setLoggedIn = props[0];
  const setView = props[1];
  
  const [username ,setUsername] = useState('');
  const [password, setPassword] = useState('');
  


  return (
    <>
        <h1>LOGIN page</h1>
        <form>
          
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
          <input type="button" value="Login" onClick={() => {
            const userDetails = handleLogin(username, password);
            setLoggedIn(userDetails);
            setView("Profile")}}/>
        </form>
    </>
  )
}

