import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const MailSent = ({ data }) => {
  const allNodes = data.allMarkdownRemark.nodes
  const landingPageNode = allNodes.find(
    (node) => node?.frontmatter?.templateKey === 'landingPage'
  )
  const { frontmatter } = landingPageNode
  const { bgImage, meImage } = frontmatter

  const siteDescription = 'Nachricht gesendet. Vielen Dank für Ihre Nachricht.'

  return (
    <Layout
      bgFluid={bgImage.childImageSharp.fluid}
      meFixed={meImage.childImageSharp.fixed}
    >
      <Helmet>
        <title>Permakultur Handwerk | Nachricht gesendet</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Nachricht erfolgreich gesendet</h2>
          </header>
          <p>
            Vielen Dank für Ihre Nachricht. Ich melde mich so bald wie möglich
            bei Ihnen.
          </p>
          <Link to="/">← Zurück zur Startseite</Link>
        </section>
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

export default MailSent
