'use client'
import React from "react";

export const View2 = () => {
  // Logiikkaa yms
  const num1 = 3;
  const num2 = 4;

  // Returniin kaikki renderävät komponentit ja html
  return (
    <>
      <h1>Base View 2</h1>
      <p>{num1}+{num2}={num1+num2}</p>
    </>
  )
}