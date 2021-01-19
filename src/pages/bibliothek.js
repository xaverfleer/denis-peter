import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const HomeIndex = ({ data }) => {
  const { frontmatter: landingPageFrontmatter } = data.landingPage
  const { bgImage, meImage, contact } = landingPageFrontmatter

  const { frontmatter: libraryPageFrontmatter } = data.libraryPage
  const siteTitle = libraryPageFrontmatter.title
  const { intro } = libraryPageFrontmatter

  return (
    <Layout
      bgFluid={bgImage.childImageSharp.fluid}
      email={contact.email}
      meFixed={meImage.childImageSharp.fixed}
    >
      <Helmet>
        <title>Permakultur Handwerk | Bibliothek</title>
        <meta
          name="description"
          content="Bibliothek mit Wissen Rund um die Permakultur."
        />
      </Helmet>

      <div id="main">
        <section>
          <header>
            <h1>{siteTitle}</h1>
          </header>
          <p>{intro}</p>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    libraryPage: markdownRemark(
      frontmatter: { templateKey: { eq: "libraryPage" } }
    ) {
      frontmatter {
        title
        intro
      }
    }
    landingPage: markdownRemark(
      frontmatter: { templateKey: { eq: "landingPage" } }
    ) {
      frontmatter {
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
        contact {
          email
        }
      }
    }
  }
`
