import React, { useState } from 'react'
import './navbar.css';

import logo from '../../assets/img/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#witcher">The Witcher</a></p>
    <p><a href="#geralt">Geralt</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#reviews">Reviews</a></p>
  </>

)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="witcher__navbar">

      <div className="witcher__navbar-links">
        <div className="witcher__navbar-menu">
          {
            toggleMenu ?
            <RiCloseLine size={30} onClick={() => {setToggleMenu(false)}}/> : <RiMenu3Line size={30} onClick={() => {setToggleMenu(true)}}/>
          }
          {
            toggleMenu && (
              <div className="witcher__navbar-menu_container">
                <div className="witcher__navbar-menu_container-links">
                  <Menu />
                </div>
              </div>
            )
          }
        </div>

        <div className="witcher__navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="witcher__navbar-links_container">
          <Menu/>
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;