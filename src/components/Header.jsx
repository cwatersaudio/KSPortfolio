import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <div className='nav-top-bar'>
        <Menu />
        <div className='logo'>
          {/* <img src="" alt="" /> */}
          <h3>LOGO HERE</h3>
        </div>
      </div>



      <nav className="nav">

      </nav>
    </header>
  )
}

export default Header