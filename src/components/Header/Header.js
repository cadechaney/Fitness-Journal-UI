import './Header.css'
import React from 'react'
import HamburgerMenu from '../Hamburger/Hamburger'

function Header() {


  return (
    <div className='header-container'>
      <h1>SweatScript: Chiseling Your Fitness Memoir</h1>
      <HamburgerMenu />
    </div>
  )
}

export default Header