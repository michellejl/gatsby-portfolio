import React from 'react'

import Social from './social'

const Header = ({ siteTitle }) => (
  <header>
    {siteTitle}
    <Social />
  </header>
)

export default Header
