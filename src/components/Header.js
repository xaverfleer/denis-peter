import React from 'react'
import Img from 'gatsby-image'

import Footer from './Footer'
import overlay from '../assets/scss/images/overlay.png'

const Header = ({ bgFluid, email, meFixed }) => (
  <header
    id="header"
    style={{ backgroundImage: `url(${overlay}), url(${bgFluid?.src})` }}
  >
    <div className="inner">
      <a href="/#" className="image avatar">
        <Img fixed={meFixed} />
      </a>
      <h2>
        <strong>Ich bin Denis Peter</strong>, Permakultur ist meine Leidenschaft
      </h2>
    </div>
    <Footer email={email} />
  </header>
)

export default Header
