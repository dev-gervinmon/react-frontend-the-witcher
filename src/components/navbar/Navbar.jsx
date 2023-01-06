import React, { useState, useEffect } from 'react'
import './navbar.css';

import logo from '../../assets/img/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#explore">Explore</a></p>
    <p><a href="#products">Products</a></p>
    <p><a href="#reviews">Reviews</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      };
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  })

  return (
    <div className="witcher__navbar" id={scrolled ? "scrolled" : ''}>
      
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
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>

        <div className="witcher__navbar-links_container">
          <Menu/>
          <button type="button">More</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;