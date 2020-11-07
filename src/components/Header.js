import React from 'react'
import Img from 'gatsby-image'

import Footer from './Footer'
import overlay from '../assets/scss/images/overlay.png'

const Header = ({ bgFluid, meFixed }) => (
  <header
    id="header"
    style={{ backgroundImage: `url(${overlay}), url(${bgFluid?.src})` }}
  >
    <div className="inner">
      <a href="/#" className="image avatar">
        <Img fixed={meFixed} />
      </a>
      <h1>
        <strong>Ich bin Denis Peter</strong>, Permakultur ist meine Leidenschaft
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
