'use client'
import React from "react";

export const BaseView = () => {
  // Logiikkaa yms
  const num1 = 1;
  const num2 = 2;

  // Returniin kaikki renderävät komponentit ja html
  return (
    <>
      <h1>Base View</h1>
      <p>{num1}+{num2}={num1+num2}</p>
    </>
  )
}