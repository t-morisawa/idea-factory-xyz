import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
      <div>
      <h1>{frontmatter.title}</h1>
      <div
    className="description"
    dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/testmarkdown" } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
