import React from 'react'

import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Intro from './components/Intro'
import Services from './components/Services'

function App() {

  // const colorTheme = {
  //   primary: '#000000',
  //   secondary: '#ffffff',
  //   accent: '#000000',
  //   text: '#000000',
  //   background: '#ffffff',
  //   font: '#000000'
  // }

  return (
    <>
      <div className='page-canvas'>
        <Header />
        <Intro />
        <Bio />
        <Services />
      </div>

    </>
  )
}

export default App
