import React from "react";

export default function Repo({
  repolink,
  reponame,
  excerpt,
  styles
}) {
  return (
    <div className={styles.repo}>
      <div className={styles.description}>
        <h2 className={styles.reponame}>
          <a className={styles.repolink} href={ repolink } target="_blank" rel="noreferrer noopener">{reponame}</a>
        </h2>
        <p className={styles.excerpt}>{ excerpt }</p>
      </div>
    </div>
  )
}