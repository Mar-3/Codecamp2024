'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { BaseView } from './Views/BaseView/BaseView';
import { View2 } from './Views/View2/BaseView';
import { Notice } from './Views/Notice/Notice';
import { Navbar } from './ui/Navbar';

const views = {
  base: BaseView,
  view2: View2,
  notice: Notice
}

export default function App() {
  const [view, setView] = useState("base");

  // Temporary fake login
  const [loggedIn, setLoggedIn] = useState("false");

  console.log(Object.keys(views));
  console.log(views.base)

  const currentView = () => {
    const CurrentView = views[view];
    return <CurrentView props=''/>
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
