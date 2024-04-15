import React from 'react'
import Menu from './Menu'

const Header = () => {

  // add color theme functionality
  return (
    <header>
      <div className='nav-top-bar'>
        <Menu />
        <div className='logo'>
          {/* <img src="" alt="" /> */}
          <p>&lt;Chris Waters&gt;</p>
        </div>
      </div>
    </header>
  )
}

export default Header