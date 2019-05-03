import React from "react";
import { graphql } from "gatsby";
import Container from "./description";


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const path = `/idea/${frontmatter.id}/`;
  return (
      <Container to={path}>
      <div
    className="description"
    dangerouslySetInnerHTML={{ __html: html }}
      />
      </Container>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        title
        id
      }
    }
  }
`
