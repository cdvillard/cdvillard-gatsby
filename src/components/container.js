import React from "react";
import * as containerStyles from "./../styles/container.module.scss";

export default function Container({children}) {
  return (
    <main className={containerStyles.container}>
      {children}
    </main>
  )
}