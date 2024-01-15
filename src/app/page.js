"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FrontPage } from "./Views/FrontPage/FrontPage";
import { Notice } from "./Views/Notice/Notice";
import { Search } from "./Views/Search/Search";
import { Navbar } from "./ui/Navbar";
import { Login } from "./Views/User/Login/Login";
import { Register } from "./Views/User/Register/Register";
import { Dashboard } from "./Views/User/Dashboard/Dashboard";
import { Profile } from "./Views/User/Profile/Profile";
import { Map } from "./Views/Map/Map";
import { Account } from "./Views/User/Account/Account";
import NewNotice from "./Views/NewNotice/NewNotice";

export default function App() {
  const [view, setView] = useState("FrontPage");

  // Temporary fake login
  const [loggedIn, setLoggedIn] = useState(false);

  // Insert all new views here in this format
  const views = {
    FrontPage: { component: FrontPage, props: [view] },
    Notice: { component: Notice, props: [] },
    Search: { component: Search, props: [view] },
    Login: { component: Login, props: [setLoggedIn, setView] },
    Register: { component: Register, props: [] },
    Dashboard: { component: Dashboard, props: [] },
    Profile: { component: Profile, props: [] },
    Account: { component: Account, props: [] },
    Map: { component: Map, props: []},
    "New Notice": { component : NewNotice, props: []}
    
  };

  const currentView = () => {
    const CurrentView = views[view].component;
    return <CurrentView props={views[view].props}></CurrentView>;
  };
  return (
    <>
      <Navbar
        changeView={setView}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></Navbar>
      <main className={styles.main}>{currentView()}</main>
    </>
  );
}
