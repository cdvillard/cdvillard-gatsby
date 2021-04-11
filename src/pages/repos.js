import React from "react";
import Container from "./../components/container";
import Header from "./../components/header";
import Repo from "./../components/repo";
import * as styles from "./../styles/repo.module.scss";

export default function ReposPage() {
  return (
    <Container>
      <Header content="Repos" />
      <p>These are repos I've worked on.</p>

      <Repo
        repolink="https://github.com/cdvillard/v-honk"
        reponame="v-honk"
        excerpt={"v-honk is a custom directive for Vue that adds a delightful little \"honk\" to anything."}
        styles={styles}
      />

      <Repo
        repolink="https://github.com/cdvillard/oye-socio-frontend"
        reponame="Oye Socio"
        excerpt={"Oye Socio brings many of the key features of social media network to email users. This repo represents the front-end for Oye Socio."}
        styles={styles}
      />
    </Container>
  )
}