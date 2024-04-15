import React from 'react'

import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Bio from './components/Bio'
import Intro from './components/Intro'
import Menu from './components/Menu'

function App() {



  return (
    <>
      <div className='page-canvas'>
        <Header />
        <div className='scroll-container'>
          <Intro />
          <Bio />
          <Skills />
        </div>



      </div>

    </>
  )
}

export default App
