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

      <header>
        <div class="logo">
          <img src="img/devjane.png" alt="" />
        </div>
        <button type='button' class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger" />
        </button>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
            <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
          </ul>
        </nav>
      </header>


      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Jane Smith</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src="img/dev-jane-01.jpg" alt="a picture of Jane Smith smiling" />
      </section>



      <section class="my-services" id="services">
        <h2 class="section__title section__title--services">What I do</h2>
        <div class="services">
          <div class="service">
            <h3>Design + Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="service">
            <h3>E-Commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="service">
            <h3>WordPress</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <a href="#work" class="btn">My Work</a>
      </section>



      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>

        <div class="about-me__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <img src="img/dev-jane-02.jpg" alt="Jane leaning against a bus" />
      </section>


      <section class="my-work" id="work">
        <h2 class="section__title">My work</h2>
        <p class="section__subtitle" />

        <div class="portfolio">
          <a href="#" class="portfolio__item">
            <img src="img/portfolio-01.jpg" alt="" class="portfolio__img" />
          </a>

          <a href="#" class="portfolio__item">
            <img src="img/portfolio-02.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-03.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-04.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-05.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-06.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-07.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-08.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-09.jpg" alt="" class="portfolio__img" />
          </a>


          <a href="#" class="portfolio__item">
            <img src="img/portfolio-10.jpg" alt="" class="portfolio__img" />
          </a>
        </div>
      </section>


      <footer>
        <a href="mailto:hello@jane.dev" class="footer__link">hello@jane.dev</a>
        <ul class="social-list">
          <li class="social-list__item"><a class="social-list__link" href="https://codepen.io">a</a></li>
          <li class="social-list__item">b<a class="social-list__link" href="http://dribbble.com"></a></li>
          <li class="social-list__item"><a class="social-list__link" href="https://twitter.com">c</a></li>
          <li class="social-list__item"><a class="social-list__link" href="https://github.com">d</a></li>
        </ul>
      </footer>


    </>
  )
}

export default App
