import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import Layout from "../components/layout"

export default (props) => {
  const data = props.data
  return (
    <Layout {...props}>
      <div>
      <h1><FormattedMessage id="newsHeading" /></h1>
        <h3>TODO: ACTUAL TEMPLATE IMPLEMENTATION</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.title}</td>
                <td>
                  <Link to={node.fields.slug}>
                    {node.fields.slug}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query NewsChineseTraditionalAll {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: {templateKey: {eq: "news-post.zh-Hant"} } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
