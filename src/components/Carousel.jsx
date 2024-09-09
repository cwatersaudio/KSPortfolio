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
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay(),
        WheelGesturesPlugin()])
    const [selectedProject, setSelectedProject] = React.useState(null);
    const portfolioItemRef = React.useRef(null);

    const togglePortfolioModal = () => {
        if (!portfolioItemRef.current) {
            console.log("modal not there")
            return
        } else {
            portfolioItemRef.current.hasAttribute('open') ?
                portfolioItemRef.current.close() :
                portfolioItemRef.current.showModal()

        }
    }

    const selectProject = (item) => {
        console.log(item)
        setSelectedProject(item);
        togglePortfolioModal()
    };



    const workCarousel = projects.map((project, index) => {
        return (
            <div className="embla__slide" key={project.title}>
                <div className="portfolio__item">
                    <WorkPreview
                        onClick={() => selectProject(project)}
                        vidSrc={project.clip}
                        imgSrc={project.image}
                        addDefaultImg={addDefaultImg}
                    />
                    <p
                        className="portfolio__subtitle"
                        onClick={() => selectProject(project)}

                    >
                        {project.title}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    {workCarousel}
                </div>
            </div>

            {/* {portfolioItemVisible && <PortfolioItem
                isOpen={portfolioItemVisible}
                onClose={handleModalClose}
                selectedItem={selectedProject}

            />} */}

            <dialog ref={portfolioItemRef} className="portfolio__modal">
                {selectedProject && <PortfolioItem
                    selectedItem={selectedProject}
                    onClose={togglePortfolioModal}
                />
                }
            </dialog>
        </>


    )
}
