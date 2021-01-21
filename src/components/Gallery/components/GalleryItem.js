import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const GalleryItem = ({
  source,
  thumbnail,
  caption,
  description,
  position,
  slug,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <Img fluid={thumbnail} />
      </a>

      <h3>{caption}</h3>
      <p>{description}</p>
      {slug && (
        <Link className="page-link" to={slug}>
          Zum Eintrag →
        </Link>
      )}
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
