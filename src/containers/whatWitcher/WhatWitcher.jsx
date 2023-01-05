import React from 'react'
import WhatImg from '../../components/whatImg/WhatImg';
import './whatWitcher.css';

import witchers from '../../assets/img/witchers.webp';
import geralt from '../../assets/img/geralt.webp';
import iconlist from '../../assets/img/iconlist.png';

const WhatWitcher = () => {
  const infoData = [
    {
      imgUrl: witchers,
      text: "What is a witcher?"
    },
    {
      imgUrl: geralt,
      text: "Who is Geralt of Rivia?"
    }
  ]

  const etcData = ["Ciri, the Child of Prophecy", "Yennefer of Vengerberg", "The Origin of Geralt's ''The Butcher of Blaviken''", "Letho, the Assassin of Kings"]
  return (
    <div className="whatWitcher-container">

      <div className="whatWitcher__title-container"><h3>LORE</h3></div>

      <div className="whatWitcher__content-container">
          {
            infoData.map((data, index) => {
              return (
                <WhatImg key={index} imgUrl={data.imgUrl} text={data.text}/>
              )
            })
          }
        <div className="whatWitcher-list-container">
          <div className="whatWitcher-box-container">
            {
              etcData.map((data, index) => {
                return (
                  <div key={index} className="whatWitcher-individual-container">
                    <img src={iconlist} alt="list"/>
                    <p key={index}><a href="https://google.com">{data}</a></p>
                  </div>
                )
              })
            }
          </div>
          <div className="whatWitcher-seemore">
            <a href="https://google.com">Explore further</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WhatWitcher;