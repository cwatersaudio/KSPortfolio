import React from 'react'
import { Carousel } from './Carousel'

const PortfolioContext = React.createContext()


const Work = (props) => {

    // function to map out card objects to display

    const addDefaultImg = ev => {
        ev.target.src = "/img/default_image.jpg"
    }

    return (
        // <PortfolioContext.Provider value={{ PortfolioModalVisible, selectedProject }}>
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">

                <Carousel
                    addDefaultImg={addDefaultImg}
                />


            </div>
        </section>
        // </PortfolioContext.Provider>
    )
}

export default Work

export { PortfolioContext }
