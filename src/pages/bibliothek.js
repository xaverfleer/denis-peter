import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

const HomeIndex = ({ data }) => {
  const { frontmatter: landingPageFrontmatter } = data.landingPage
  const { bgImage, meImage, contact } = landingPageFrontmatter

  const { frontmatter: libraryPageFrontmatter } = data.libraryPage
  const siteTitle = libraryPageFrontmatter.title
  const { intro } = libraryPageFrontmatter

  const featuredPosts = data.libraryPosts.nodes
    .map((n) => ({ frontmatter: n.frontmatter, slug: n.fields.slug }))
    .map(({ frontmatter, slug }) => ({
      caption: frontmatter.title,
      description: frontmatter.description,
      fluidLarge: frontmatter.fluidLarge,
      fluidThumb: frontmatter.fluidThumb,
      slug: slug,
    }))

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
        <section>
          <h2>Einträge</h2>
          <Gallery entries={featuredPosts} />
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
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
    libraryPage: markdownRemark(
      frontmatter: { templateKey: { eq: "libraryPage" } }
    ) {
      frontmatter {
        intro
        title
      }
    }
    libraryPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "library-post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          fluidThumb: featuredImage {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fluidLarge: featuredImage {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
