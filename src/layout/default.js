import React from "react";
import Container from "./../components/container";
import Navigation from "./../components/nav";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
}
