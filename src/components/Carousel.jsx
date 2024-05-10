import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import PortfolioItem from './PortfolioItem'
import WorkPreview from './WorkPreview'
import { PortfolioContext } from './Work'
import projects from './WorkData'



// {
//     title: "Endorsements",
//     description: "Description 1",
//     image: "",
//     clip: "",
//     gitHub: "https://github.com/cwatersaudio/endorsements-standalone.git",
//     liveSite: "https://gleaming-licorice-029ec9.netlify.app/",
// }




export function Carousel({ addDefaultImg }) {
    const { togglePortfolioItemVisible, portfolioItemVisible } = React.useContext(PortfolioContext)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), WheelGesturesPlugin()])


    const workUI = projects.map((project, index) => {
        return (
            <div className="embla__slide" >
                <div className="portfolio__item" >
                    <WorkPreview
                        onClick={togglePortfolioItemVisible}
                        vidSrc={project.clip}
                    />
                    <p className='portfolio__subtitle' onClick={togglePortfolioItemVisible}>{project.title}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {/* <div className="embla__slide">
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} />
                        <p className='portfolio__subtitle'>Movie Watchlist Project</p>
                    </a>
                </div>
                <div className="embla__slide" >
                    <div className="portfolio__item" >
                        <WorkPreview
                            onClick={togglePortfolioItemVisible}
                            vidSrc="/media/tenzies3.mp4"
                        />
                        <p className='portfolio__subtitle' onClick={togglePortfolioItemVisible}>Tenzies</p>
                    </div>
                </div>
                <div className="embla__slide">
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} />
                        <p className='portfolio__subtitle'>Color Picker</p>
                    </a>
                </div>
                <div className="embla__slide">
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} />
                        <p className='portfolio__subtitle'>Endorsements</p>
                    </a>
                </div> */}


                {workUI}
            </div>
            {portfolioItemVisible && <PortfolioItem />}
        </div>

    )
}
