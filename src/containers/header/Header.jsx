import React from 'react'
import './header.css';

import headerImg from '../../assets/img/geralt.png';

const Header = () => {
  return (
    <div className="witcher__header gradient__header" id="home">
        <div className="witcher__header-image">
            <img src={headerImg} alt="header image"/>
        </div>
        <div className="witcher__header-content">
            <h1>This World Doesn't Need A <br/>Hero; <br/>It Needs A <br/>Professional.<br/></h1>
        </div>
    </div>
  )
}

export default Header