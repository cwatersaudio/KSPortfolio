import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <div className='nav-top-bar'>
        <Menu />
        <div className='logo'>
          {/* <img src="" alt="" /> */}
          <p>&lt;Chris Waters&gt;</p>
        </div>
      </div>
      <h1>Hi, I'm Chris.</h1>
      <h2>Front-End Dev</h2>



      <nav className="nav">

      </nav>
    </header>
  )
}

export default Header