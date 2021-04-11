import * as React from "react"
import { Link } from "gatsby";
import Container from "./../components/container";

// markup
const IndexPage = () => {
  return (
    <Container>
      <h1>I'm Charles, and I build website.</h1>
      <p>
        I'm a front-end and full-stack engineer based in Riverview, FL.
      </p>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/repos/">Repos</Link>
        </li>
      </ul>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Container>
  )
}

export default IndexPage
