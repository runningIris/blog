import React from "react"
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
// import Link from 'gatsby-link'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import DefaultIndexPage from "./index.en.js"

export const IndexPageTemplate = ({
  location,
  bannerImage,
  whoAreWe,
  // TODO: MORE fields here based on schema configuration in config.yml
}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1><FormattedMessage id="welcomeMessage" /></h1>
    <h3>TODO: ACTUAL TEMPLATE IMPLEMENTATION</h3>
    <img src={bannerImage} alt="" />
    <h3>我們是誰</h3>
    <p>{whoAreWe}</p>
    <hr />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

IndexPageTemplate.propTypes = {
  bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  whoAreWe: PropTypes.string,
  // TODO: MORE fields here based on schema configuration in config.yml
}

// NOTE: Since IndexPage schema is the same for all languages, just reuse the
// code from the English template.
// If the IndexPageTemplate can be generalized too, then import that and reuse too!
// const IndexPage = (props) => {
// }
const IndexPage = (props) => (
  <DefaultIndexPage {...props} />
)
export default IndexPage

// TODO: Much more implementation needed.
// Similar to news-post.en.js and https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/src/templates/index-page.js
export const pageQuery = graphql`
  query IndexPageChineseTraditional {
    markdownRemark(frontmatter: { templateKey: { eq: "index.zh-Hant" } }) {
      frontmatter {
        bannerImage
        whoAreWe
      }
    }
  }
`
