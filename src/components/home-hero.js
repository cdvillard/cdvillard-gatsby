import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./../styles/homehero.module.scss";

export default function HomeHero() {
  const name = "CHARLES VILLARD";
  return (
    <div className={styles.homeHero}>
      <div className={styles.rowName}>
        {Array.from(name).map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
      <div className={styles.rowHeadshot}>
        <div className={styles.headshotContainer}>
          <StaticImage
            alt="headshot of Charles Villard"
            className={styles.headshot}
            src="./../images/headshot.jpg"
            quality={90}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>
        <div className={styles.textblock}>
          I like to work with
          <br />
          design systems,
          <br />
          static site generators,
          <br />
          and JavaScript.
        </div>
      </div>
    </div>
  );
}
