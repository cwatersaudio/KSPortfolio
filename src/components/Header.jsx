import React from 'react'
import Menu from './Menu'

const Header = () => {

  // add color theme functionality
  return (
    <header className='header'>
      <div className="logo">
        <p id='chrisTag' className='logo__icon'>&lt;Chris Waters\&gt;</p>

      </div>
      <Menu />




    </header>
  )
}

export default Header

