import React from 'react'




const PortfolioItem = ({ isOpen, onClose, selectedItem }) => {

    //receives a portfilio object conatining:
    //* title
    //* description
    //* image
    //*gitHub ilink
    //* live site link

    if (!isOpen) return null;

    return (
        <div className="portfolio__modal">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <h2>{selectedItem.title}</h2>
                    <p>{selectedItem.description}</p>
                    {/* Add any other relevant details about the selected item */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;