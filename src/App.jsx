import React from 'react'

import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Intro from './components/Intro'
import Services from './components/Services'
import Menu from './components/Menu'
import Work from './components/Work'
import PortfolioItem from './components/PortfolioItem'

function App() {

  const [portfolioItemVisible, setPortfolioItemVisible] = React.useState(false)
  function togglePortfolioItemVisible() {
    setPortfolioItemVisible(prevState => !prevState)
  }


  // React.useEffect(() => {
  //   const themeVars = getComputedStyle(document.querySelector(':root'))
  //   console.log(themeVars);


  // }, [])

  // const colorTheme = {
  //   primary: '#000000',
  //   secondary: '#ffffff',
  //   accent: '#000000',
  //   text: '#000000',
  //   background: '#ffffff',
  //   font: '#000000'
  // }

  return (
    <div>
      <Menu />
      <Header />
      <Intro />
      <Services />
      <Work
        portfolioItemVisible={togglePortfolioItemVisible}
      />
      <PortfolioItem
        portfolioItemVisible={portfolioItemVisible}
      />




    </div>
  )
}

export default App
