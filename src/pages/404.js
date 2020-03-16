import React from "react"
import { FormattedMessage } from 'react-intl';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props) => (
  <Layout {...props}>
    <SEO title="404: Not found" />
    <h1><FormattedMessage id="notFound404Heading" /></h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
