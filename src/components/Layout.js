import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Layout = ({ bgFluid, children, email, meFixed }) => (
  <div>
    <Header bgFluid={bgFluid} email={email} meFixed={meFixed} />
    {children}
  </div>
)

export default Layout
