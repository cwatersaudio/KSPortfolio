import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'



export function Carousel({ addDefaultImg }) {
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
                <div className="embla__slide">
                    <a href="portfolio-item.html" className="portfolio__item">
                        {/* <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} /> */}
                        <video width="320px" height="240px" autoPlay>
                            <source src="/media/tenzies1.mp4" type="video/mp4" />
                        </video>
                        <p className='portfolio__subtitle'>Tenzies</p>
                    </a>
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
