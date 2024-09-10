import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import PortfolioModal from './PortfolioModal'
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
    const PortfolioModalRef = React.useRef(null);

    const togglePortfolioModal = () => {
        if (!PortfolioModalRef.current) {
            console.log("modal not there")
            return
        } else {
            PortfolioModalRef.current.hasAttribute('open') ?
                PortfolioModalRef.current.close() :
                PortfolioModalRef.current.showModal()

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

            {/* {PortfolioModalVisible && <PortfolioModal
                isOpen={PortfolioModalVisible}
                onClose={handleModalClose}
                selectedItem={selectedProject}

            />} */}

            <dialog ref={PortfolioModalRef} className="portfolio__modal">
                {selectedProject && <PortfolioModal
                    selectedItem={selectedProject}
                    onClose={togglePortfolioModal}
                    noImg={addDefaultImg}
                />
                }
            </dialog>
        </>


    )
}
