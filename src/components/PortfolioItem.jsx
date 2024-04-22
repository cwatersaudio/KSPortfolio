import React from 'react'

const PortfolioItem = ({ portfolioItemVisible }) => {

    //receives a portfilio object conatining:
    //* title
    //* description
    //* image
    //*gitHub ilink
    //* live site link
    return (
        <>
            {portfolioItemVisible && (
                <h1>Here's a portfolio item</h1>
            )}
        </>
    )
}

export default PortfolioItem