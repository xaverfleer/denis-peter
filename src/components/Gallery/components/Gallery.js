import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'

const Gallery = ({ entries }) => {
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
      {entries && (
        <div className="row gallery">
          {entries.map((entry, i) => {
            return (
              <GalleryItem
                source={entry.fluidLarge.childImageSharp.fluid.src}
                thumbnail={entry.fluidThumb.childImageSharp.fluid}
                caption={entry.caption}
                description={entry.description}
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
              views={entries.map((w, i) => ({
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
