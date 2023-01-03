import React from 'react'
import './theWitcher.css';

import Feature from '../../components/feature/Feature';

import whatBg from '../../assets/img/what-bg.png';
import writerWitcher from '../../assets/img/writer-witcher.webp';
import gameWitcher from '../../assets/img/game-witcher.png';
import netflixWitcher from '../../assets/img/netflix-witcher.png';

const TheWitcher = () => {

  const quote = `"Indeed, there is nothing more repulsive than these monsters 
  that defy nature and are known by the name of witcher, as they 
  are the offspring of foul sorcery and witchcraft. 
  They are unscrupulous scoundrels without conscience and virtue,
  veritable creatures from hell capable only of taking lives..."`

  const containerData = [
    {
      h1: "The birth...",
      text: "The brilliant mind of Andrzej Sapkowski produced 8 cannonical The Witcher Books and the reading material continuously adds up...",
      imgUrl: writerWitcher,
      className: "div3"
    },
    {
      h1: "The growth...",
      text: "CD Projekt RED decided to create The Witcher Trilogy and the third installment: The Witcher 3: Wild Hunt is the most popular among gamers and is undoubtedly one of the best games ever even as of this moment.",
      imgUrl: gameWitcher,
      className: "div2"
    },
    {
      h1: "The result...",
      text: "Netflix produced a series based on the books wherein Henry Cavill took on the role of Geralt of Rivia.",
      imgUrl: netflixWitcher,
      className: "div1"
    }
  ]

  return (
    <div className="witcher__what" id="witcher">

      <div className="witcher__what-main">
        <div/>
        <h1>A Witcher is simply a monster designed to kill monsters...</h1>
        <div className="witcher__what__feature-container gradient__header">
          <Feature text={quote} imgUrl={whatBg}/>
        </div>
      </div>

      <div className="witcher__what-heading">
        <h2 className="gradient__text">The never-ending expansion of a beloved universe</h2>
        <div className="div1"/>
        <div className="div2"/>
        <div className="div3"/>
      </div>

      <div className="witcher__what-container">
        {
          containerData.map((data, index) => {
            return (
              <div key={index}>
                <h1>{data.h1}</h1>
                <div className={data.className}/>
                <div className="witcher__what-container__feature-container">
                  <Feature text={data.text} imgUrl={data.imgUrl} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TheWitcher;