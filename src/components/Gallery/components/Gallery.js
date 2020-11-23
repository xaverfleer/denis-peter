import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'

const Gallery = ({ works }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  return (
    <div>
      {works && (
        <div className="row gallery">
          {works.map((work, i) => {
            return (
              <GalleryItem
                source={work.fluidLarge.childImageSharp.fluid.src}
                thumbnail={work.fluidThumb.childImageSharp.fluid}
                caption={work.caption}
                description={work.description}
                position={i}
                toggleLightbox={toggleLightbox}
                key={i}
              />
            )
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              views={works.map((w, i) => ({
                src: w.fluidLarge.childImageSharp.fluid.src,
                id: i,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
