import React from "react";
import { graphql } from "gatsby";


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
      <div>
      <div
    className="description"
    dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
