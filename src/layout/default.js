import React from "react";
import Container from "./../components/container";
import Navigation from "./../components/nav";
import HomeHero from "./../components/home-hero";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navigation />
      <HomeHero />
      <Container>{children}</Container>
    </>
  );
}
