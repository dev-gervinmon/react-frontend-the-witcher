import React from 'react'
import './footer.css';

import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/twitter.svg';
import discord from '../../assets/img/discord.svg';
import youtube from '../../assets/img/youtube.svg';
import gvmLogo from '../../assets/img/logo.png';

const Footer = () => {
  
  const links = ['Terms of Use & Privacy Policy', 'Careers', 'User Agreement', 'Guidelines'];
  const socMed = [facebook, twitter, discord, youtube];

  return (
    <div className="footer-section">

      <div className="footer-links__container">
        {
          links.map((link, index) => {
            return(<a key={index} href="https://google.com"><p>{link}</p></a>)
          })
        }
      </div>

      <div className="footer-socmed__container">
        {
          socMed.map((app, index) => {
            return(
              <div className="footer-app__container" key={index}>
                <a href="https://google.com"><img src={app} alt={app}/></a>
              </div>
            )
          })
        }
      </div>

      <div className="footer-copyright__container">
        <p>The Witcher game is set in the universe created by Andrzej Sapkowski in his series of books. All other copyrights and trademarks are the property of their respective owners.</p>
      </div>

      <div className="footer-creator">
        <div className="footer-breaker"/>
          <div className="footer-creator-logo__container">
            <a href="https://dev-gvm-portfolio.onrender.com"><img src={gvmLogo} alt="logo"/></a>
          </div>
      </div>
    </div>
  )
}

export default Footer