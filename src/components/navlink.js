import React from "react";
import { Link } from "gatsby";
import * as styles from "./../styles/navlink.module.scss";

export default function NavigationLink({ children, target }) {
  return (
    <li className={styles.navigationLink}>
      <Link to={target}>{children}</Link>
    </li>
  );
}
