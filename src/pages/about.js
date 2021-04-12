import React from "react";
import { graphql } from "gatsby";
import Heading from "./../components/heading";
import DefaultLayout from "./../layout/default";

export default function About({ data }) {
  return (
    <DefaultLayout>
      <Heading content={data.site.siteMetadata.title} />
      <p>I'm a dev! Here is more!</p>
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
