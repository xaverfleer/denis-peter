import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => {
  const allNodes = data.allMarkdownRemark.nodes
  const landingPageNode = allNodes.find(
    (node) => node?.frontmatter?.templateKey === 'landingPage'
  )
  const { frontmatter } = landingPageNode
  const { bgImage, meImage } = frontmatter

  return (
    <Layout
      bgFluid={bgImage.childImageSharp.fluid}
      meFixed={meImage.childImageSharp.fixed}
    >
      <Helmet>
        <title>Permakultur Handwerk | Seite nicht gefunden</title>
        <meta name="description" content="Seite nicht gefunden" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div id="main">
        <h1>Seite nicht gefunden</h1>
        <p>
          Die Seite ist entweder momentan nicht verfügbar, wurde verschoben oder
          existiert nicht mehr.
        </p>
        <Link to="/">← Zurück zur Startseite</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          templateKey
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          meImage {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default NotFoundPage
