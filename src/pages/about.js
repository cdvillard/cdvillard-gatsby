import React from "react";
import Header from "./../components/header";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header content="This is content!" />
      <Header content={"This is more content!"} />
      <p>I'm a dev! Here is more!</p>
    </div>
  )
}