import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const libraryPostTemplate = ({ data }) => {
  const { bgImage, meImage } = data.landingPage.frontmatter
  const { libraryPost } = data
  const { title, description } = libraryPost.frontmatter

  return (
    <Layout
      bgFluid={bgImage.childImageSharp.fluid}
      meFixed={meImage.childImageSharp.fixed}
      title={title}
    >
      <Helmet>
        <title>Permakultur Handwerk | {title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div id="main">
        <article
          className="library-post"
          itemScope
          itemType="http://schema.org/Article"
          dangerouslySetInnerHTML={{ __html: libraryPost.html }}
        ></article>
      </div>
    </Layout>
  )
}

export default libraryPostTemplate

export const pageQuery = graphql`
  query($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
        description
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
      }
    }
    libraryPost: markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`