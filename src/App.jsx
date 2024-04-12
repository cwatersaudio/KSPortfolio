import React from 'react'

import './App.css'
import Header from './components/Header'
import Overview from './components/Overview'
import Bio from './components/Bio'

function App() {



  return (
    <>
      <div className='page-canvas'>
        <Header />
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
