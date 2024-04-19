import React from 'react'

const Intro = () => {
    return (
        <section id='intro' className='intro'>
            <h1 className='section__title section__title--intro'>
                Hi, I'm <strong>Chris Waters</strong></h1>
            <p className='section__subtitle section__subtitle--intro'>FRONT-END DEV</p>
            <img id="headshot" src="/img/chris_beach.jpg" className='intro__img' alt="chris on a beach" />
        </section>
    )
}

export default Intro

