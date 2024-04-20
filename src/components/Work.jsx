import React from 'react'
import { Carousel } from './Carousel'

const Work = () => {

    // function to map out card objects to display


    const addDefaultImg = ev => {
        ev.target.src = "/img/default_image.jpg"
    }




    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My projects</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">

                <Carousel
                    addDefaultImg={addDefaultImg}
                />

            </div>
        </section>
    )
}

export default Work