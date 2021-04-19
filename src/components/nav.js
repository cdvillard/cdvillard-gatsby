import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavigationLink from "./navlink";
import * as styles from "./../styles/navigation.module.scss";

export default function Navigation() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav>
      <span>
        <div className={styles.tagline}>GREAT DEVELOPMENT, MUCH CODE</div>
      </span>
      <ul className={styles.navigation}>
        <NavigationLink target="/">
          <span className="brand">{data.site.siteMetadata.title}</span>
        </NavigationLink>
        <NavigationLink target="/about">About</NavigationLink>
        <NavigationLink target="/repos">Repos</NavigationLink>
        <NavigationLink target="/style-check">Style Check</NavigationLink>
      </ul>
    </nav>
  );
}
