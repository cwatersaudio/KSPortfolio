import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'



export function Carousel({ addDefaultImg, togglePortfolioItem }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), WheelGesturesPlugin()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} />
                        <p className='portfolio__subtitle'>Movie Watchlist Project</p>
                    </a>
                </div>
                <div className="embla__slide" >
                    <div href="" className="portfolio__item" onClick={togglePortfolioItem}>
                        <video
                            autoPlay
                            loop
                            src='/media/tenzies.mp4'
                            onMouseOver={(event) => { event.target.play() }}
                            onMouseOut={(event) => { event.target.pause() }}
                            className='portfolio__img'
                        />
                        <p className='portfolio__subtitle'>Tenzies</p>
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
                </div>

            </div>
        </div>
    )
}
