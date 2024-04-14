import React from 'react'

import './App.css'
import Header from './components/Header'
import Overview from './components/Overview'
import Bio from './components/Bio'
import Intro from './components/Intro'

function App() {



  return (
    <>
      <div className='page-canvas'>
        <Header />
        <Intro />
        <Overview />
        <Bio />
        {/* 
        <Examples of work>
        *carousel w/embla carousel
        */}

      </div>

    </>
  )
}

export default App
