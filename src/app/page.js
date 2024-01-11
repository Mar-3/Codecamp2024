'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { FrontPage } from './Views/FrontPage/FrontPage';
import { View2 } from './Views/View2/BaseView';
import { Notice } from './Views/Notice/Notice';
import { Navbar } from './ui/Navbar';
import { Login } from './Views/User/Login/Login';
import { Register } from './Views/User/Register/Register';
import { Dashboard } from './Views/User/Dashboard/Dashboard';
import { Profile } from './Views/User/Profile/Profile';
import { Account } from './Views/User/Account/Account';


export default function App() {
  const [view, setView] = useState("FrontPage");

  // Temporary fake login
  const [loggedIn, setLoggedIn] = useState(false);

  // Insert all new views here in this format
  const views = {
    FrontPage: {component: FrontPage, props: []},
    View2: {component: View2, props: []},
    Notice: {component: Notice, props: []},
    Login: {component: Login, props: [setLoggedIn, setView]},
    Register: {component: Register, props: []},
    Dashboard: {component: Dashboard, props: []},
    Profile: {component: Profile, props: []},
    Account: {component: Account, props: []}
  }

  const currentView = () => {
    const CurrentView = views[view].component;
    return <CurrentView props={views[view].props}/>
  }
  return (
    <>
    <Navbar changeView={setView} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
    <main className={styles.main}>
          {currentView()}
      </main>
    </>
  )
}
