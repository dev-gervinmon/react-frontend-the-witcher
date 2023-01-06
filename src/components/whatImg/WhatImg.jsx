import React from 'react'
import './whatImg.css';

const WhatImg = ({ imgUrl, text }) => {
  return (
    <a href="https://google.com"><div className="whatImg-container">
        <div className="whatImg-img-container">
          <img src={imgUrl} alt={imgUrl}/>
        </div>
        <div className="whatImg-text-container">
          <p><a href="http://google.com">{text}</a></p>
        </div>
    </div></a>
  )
}

export default WhatImg