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
    // const { portfolioItemVisible, selectedProject } = React.useContext(PortfolioContext)
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay(),
        WheelGesturesPlugin()])
    const [portfolioItemVisible, setPortfolioItemVisible] = React.useState(false)
    const [selectedProject, setSelectedProject] = React.useState(projects[0])

    const handleItemClick = (item) => {
        console.log(item)
        setSelectedProject(item);
        setPortfolioItemVisible(true);
    };

    const handleModalClose = () => {
        setPortfolioItemVisible(false);
        setSelectedItem(null);
    };

    const workUI = projects.map((project, index) => {
        return (
            <div className="embla__slide" key={project.title}>
                <div className="portfolio__item">
                    <WorkPreview
                        onClick={() => handleItemClick(project)}
                        vidSrc={project.clip}
                    />
                    <p
                        className="portfolio__subtitle"
                        onClick={() => handleItemClick(project)}
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

                    {workUI}
                </div>
            </div>

            {portfolioItemVisible && <PortfolioItem
                isOpen={portfolioItemVisible}
                onClose={handleModalClose}
                selectedItem={selectedProject}

            />}
        </>


    )
}
