import React from 'react'

const WorkPreview = ({ vidSrc, addDefaultImg, onClick, imgSrc }) => {
    return (
        <div className='preview__canvas'>{vidSrc ?
            <video
                loop
                src={vidSrc}
                onMouseEnter={(event) => { event.target.play() }}
                onMouseOut={(event) => { event.target.currentTime = 0; event.target.pause() }}
                className='portfolio__vid'
                onError={addDefaultImg}
                onClick={onClick}
                muted='muted'
            />
            :
            <img
                src={imgSrc !== "" ? imgSrc : '/img/default_image.jpg'}
                className='portfolio__img'
                onClick={onClick}
            />}
        </div>
    )
}

export default WorkPreview