import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import DefaultLayout from "./../layout/default";

export default function IndexPage({ data }) {
  // console.log(data);
  return (
    <DefaultLayout>
      <h1>I'm Charles, and I build website.</h1>
      <p>I'm a front-end and full-stack engineer based in Riverview, FL.</p>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/repos/">Repos</Link>
        </li>
      </ul>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <small>{node.frontmatter.date}</small>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
