import React from 'react'
import './feature.css';

const Feature = ({ text, imgUrl, id }) => {
  return (
    <>
      <div className="witcher__feature-container_title" id={id}>
        <h3>{text}</h3>
      </div>
      
      <div className="witcher__feature-container_image" id={id}>
        <img src={imgUrl} alt={imgUrl}/>
      </div>
    </>
  )
}

export default Feature