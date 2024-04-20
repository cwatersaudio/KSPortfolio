import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export function Carousel({ addDefaultImg }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/oldagram-square.png" alt="" className="portfolio__img" onError={addDefaultImg} />
                    </a>
                </div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    )
}
