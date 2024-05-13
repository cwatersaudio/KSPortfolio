import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";






const PortfolioItem = ({ isOpen, onClose, selectedItem }) => {

    //receives a portfilio object conatining:
    //* title
    //* description
    //* image
    //*gitHub ilink
    //* live site link

    // if (!isOpen) return null;

    return (
        <div className="portfolio__overlay">

            <div className="portfolio__modal">
                <div className="modal">
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                    <div className="modal__content">
                        <div className='portfolio__modal--top'>
                            <h2>{selectedItem.title}</h2>
                        </div>
                        <div className="portfolio__modal--main">
                            {selectedItem.clip != null && <video src={selectedItem.clip} className='portfolio__modal--clip' />}

                            <p>{selectedItem.description}</p>

                        </div>
                        <div className="portfolio__modal--footer">
                            <a href={selectedItem.gitHub} className="portfolio__link">
                                <FaGithub className='portfolio__modal--icon' />
                                <span className='portfolio__modal--icon-caption'>GitHub Repo</span>
                            </a>
                            <a href={selectedItem.liveSite} className="portfolio__link">
                                <SiNetlify className='portfolio__modal--icon' />
                                <span className='portfolio__modal--icon-caption'>Live Site</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;