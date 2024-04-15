import React from 'react'

const Intro = () => {
    return (
        <section id='home' className='intro-container'>
            <h1 className='section__title section__title--intro'>Hi, I'm <strong>Chris</strong>.</h1>
            <p className='accent-text'>FRONT-END DEV</p>
            <img id="headshot" src="/public/chris_beach.jpg" alt="chris on a beach" />
        </section>
    )
}

export default Intro