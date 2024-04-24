import React from 'react'

const WorkPreview = ({ vidSrc, addDefaultImg, onClick }) => {
    return (
        <video
            loop
            src={vidSrc}
            onMouseEnter={(event) => { event.target.play() }}
            onMouseOut={(event) => { event.target.currentTime = 0; event.target.pause() }}
            className='portfolio__vid'
            onError={addDefaultImg}
            onClick={onClick}
        />
    )
}

export default WorkPreview