import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const BlogPostTemplate = ({ data }) => {
  const { bgImage } = data.landingPage.frontmatter
  const { blogPost } = data
  const { title, description } = blogPost.frontmatter

  return (
    <Layout bgFluid={bgImage.childImageSharp.fluid} title={title}>
      <Helmet>
        <title>Permakultur Handwerk | {title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div id="main">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
          dangerouslySetInnerHTML={{ __html: blogPost.html }}
        ></article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

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
      }
    }
    blogPost: markdownRemark(id: { eq: $id }) {
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
