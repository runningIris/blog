import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Content, { HTMLContent } from '../components/content'

export const NewsPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    /* TODO: ACTUAL TEMPLATE IMPLEMENTATION */
    <section className="section">
      {helmet || ''}
      <h1 className="title">
        {title}
      </h1>
      <p><i>{date}</i></p>
      <p>{description}</p>
      <PostContent content={content} />

      {/*
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      */}
    </section>
    /* END: ACTUAL TEMPLATE IMPLEMENTATION */
  )
}

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const NewsPost = ({ location, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostEnglishByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
