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
  console.log(Object.keys(views));
  console.log(views.base)
  return (
    <>
    <Navbar changeState={setView}></Navbar>
    <main className={styles.main}>
        <div id="content">
          {Object.keys(views).map((key) => {
            if (view === key) {
              const NewView = views[key];
              return <><NewView props={''} key={view}/></>;
            }
            return null;
          })}

        </div>
      </main>
    </>
  )
}
