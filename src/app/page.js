'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { BaseView } from './Views/BaseView/BaseView';
import { View2 } from './Views/View2/BaseView';
import { Notice } from './Views/Notice/Notice';
import { Navbar } from './ui/Navbar';
import { Login } from './Views/Login/Login';
import { Register } from './Views/Register/Register';



export default function App() {
  const [view, setView] = useState("base");

  // Temporary fake login
  const [loggedIn, setLoggedIn] = useState(false);

  // Insert all new views here in this format
  const views = {
    base: {component: BaseView, props: []},
    view2: {component: View2, props: []},
    notice: {component: Notice, props: []},
    login: {component: Login, props: [setLoggedIn]},
    register: {component: Register, props: []}
  }

  const currentView = () => {
    const CurrentView = views[view].component;
    return <CurrentView props={views[view].props}/>
  }
  return (
    <>
    <Navbar changeView={setView} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
    <main className={styles.main}>
        <div id="content">
          {currentView()}


        </div>
      </main>
    </>
  )
}
