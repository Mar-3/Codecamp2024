'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import { BaseView } from './Views/BaseView/BaseView';
import { View2 } from './Views/View2/BaseView';

export default function App() {
  const [view, setView] = useState("base");
  return (
    <main className={styles.main}>
      <div>
        <button onClick={() => {setView("base")}}>BaseView</button>
        <button onClick={() => {setView("view2")}}>view2</button>
      </div>
      <div>
        {view === "base" && <BaseView/>}
        {view === "view2" && <View2/>}
      </div>
    </main>
  )
}
