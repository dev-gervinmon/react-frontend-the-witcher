import React from 'react'
import './header.css';

import headerImg from '../../assets/img/geralt.png';

const Header = () => {
  return (
    <div className="witcher__header" id="home">
        <div className="witcher__header-image fade-in-fwd">
            <img src={headerImg} alt="header"/>
        </div>
        <div className="witcher__header-content fade-in-fwd">
            <h1>Get to know your monster hunter for hire</h1>
        </div>
    </div>
  )
}

export default Header