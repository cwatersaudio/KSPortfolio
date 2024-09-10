import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const PortfolioItem = ({ onClose, selectedItem }) => {

    //receives a portfilio object conatining:
    //* title
    //* description
    //* image
    //*gitHub ilink
    //* live site link


    // if (!isOpen) return null;

    return (
        // <div className="portfolio__overlay">

        <div className="portfolio__modal">

            <div className="modal__content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className='portfolio__modal--top'>
                    <h2>{selectedItem.title}</h2>
                </div>
                <div className="portfolio__modal--main">
                    {selectedItem.clip ? <video src={selectedItem.clip} className='portfolio__modal--clip' /> :
                        <img src={selectedItem.image ? selectedItem.image : '/public/img/default_image.jpg'} alt="Preview of project" />}

                    <p className='portfolio__modal--description'>{selectedItem.description}</p>

                </div>
                <div className="portfolio__modal--footer">
                    <a href={selectedItem.gitHub} target="_blank" rel="noreferrer" className="portfolio__link">
                        <FaGithub className='portfolio__modal--icon' />
                        <span className='portfolio__modal--icon-caption'>GitHub Repo</span>
                    </a>
                    <a href={selectedItem.liveSite} target="_blank" rel="noreferrer" className="portfolio__link">
                        <SiNetlify className='portfolio__modal--icon' />
                        <span className='portfolio__modal--icon-caption'>Live Site</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;