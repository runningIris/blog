import React from "react"
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
// import Link from 'gatsby-link'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    <h3>Who Are We</h3>
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

const IndexPage = (props) => {
  const { frontmatter } = props.data.markdownRemark

  return (
    <IndexPageTemplate {...props}
      bannerImage={frontmatter.bannerImage}
      whoAreWe={frontmatter.whoAreWe}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

// TODO: Much more implementation needed.
// Similar to news-post.en.js and https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/src/templates/index-page.js
export const pageQuery = graphql`
  query IndexPageEnglish {
    markdownRemark(frontmatter: { templateKey: { eq: "index.en" } }) {
      frontmatter {
        bannerImage
        whoAreWe
      }
    }
  }
`
