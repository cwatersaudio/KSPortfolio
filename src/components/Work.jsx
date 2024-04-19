import React from 'react'
import Carousel from './Carousel'
import Card from './Card'

const Work = () => {

    // function to map out card objects to display


    const addDefaultImg = ev => {
        ev.target.src = "/img/default_image.jpg"
    }

    const cards = [
        {
            key: 1,
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
            )
        },
        {
            key: 2,
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
            )
        },
        {
            key: 3,
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
            )
        },
        {
            key: 4,
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
            )
        },
        {
            key: 5,
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
            )
        }

    ]


    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My projects</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                <Carousel
                    cards={cards}
                    imgError={addDefaultImg}
                />



            </div>
        </section>
    )
}

export default Work