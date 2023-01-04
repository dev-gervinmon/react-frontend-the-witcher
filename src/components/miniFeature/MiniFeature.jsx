import React from 'react'
import './miniFeature.css';

const MiniFeature = ({ text, imgUrl }) => {
    return (
        <>
          <div className="witcher__feature-container_title">
            <h3>{text}</h3>
          </div>
          
          <div className="witcher__feature-container_image">
            <img src={imgUrl} alt={imgUrl}/>
          </div>
        </>
      )
}

export default MiniFeature