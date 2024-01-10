'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { BaseView } from './Views/BaseView/BaseView';
import { View2 } from './Views/View2/BaseView';
import { Notice } from './Views/Notice/Notice';
import { Navbar } from './ui/Navbar';

export default function App() {
  const [view, setView] = useState("base");
  console.log(view);
  return (
    <>
    <Navbar changeState={setView}></Navbar>
    <main className={styles.main}>
        <div id="content">
          {view === "base" && <BaseView/>}
          {view === "view2" && <View2/>}
          {view === "notice" && <Notice/>}
        </div>
      </main>
    </>
  )
}
