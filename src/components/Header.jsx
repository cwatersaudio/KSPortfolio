import React from 'react'
import Menu from './Menu'

const Header = () => {

  // add color theme functionality
  return (
    <header className='header'>
      <div className="header__nav-title  "></div>





      <div className='nav-top-bar'>
        <Menu />
        <div className='logo'>
          {/* <img src="" alt="" /> */}
          <p id='chrisTag'>&lt;Chris Waters\&gt;</p>
        </div>
      </div>
    </header>
  )
}

export default Header