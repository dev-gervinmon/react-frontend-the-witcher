import React from 'react'
import './materials.css';

import monsterSlayer from '../../assets/img/monsterslayer.jpg';
import monsterSlayerTitle from '../../assets/img/monsterslayertitle.webp';
import gwent from '../../assets/img/gwent.jpg'
import gwentTitle from '../../assets/img/gwent.png'
import books from '../../assets/img/books.jpg';
import booksTitle from '../../assets/img/witcherofficial.png';
import witcher from '../../assets/img/witcher3.jpg';
import witcherTitle from '../../assets/img/wildhunt.png';
import netflix from '../../assets/img/netflix.webp';
import netflixTitle from '../../assets/img/netflix.png';
import mh from '../../assets/img/mh.jpg';
import mhTitle from '../../assets/img/mh.png';
import bg from '../../assets/img/bg.webp';
import bgTitle from '../../assets/img/bg.png';

const Materials = () => {
    const materialsData = [
        {
            name: monsterSlayerTitle,
            img: monsterSlayer,
            id: "div1",
        },
        {
            name: gwentTitle,
            img: gwent,
            id: "div2",
        },
        {
            name: booksTitle,
            img: books,
            id: "div3",
        },
        {
            name: witcherTitle,
            img: witcher,
            id: "div4",
        },
        {
            name: netflixTitle,
            img: netflix,
            id: "div5",
        },
        {
            name: mhTitle,
            img: mh,
            id: "div6",
        },
        {
            name: bgTitle,
            img: bg,
            id: "div7",
        },
    ]
  return (
    <div className="witcher_materials-section">
        {
            materialsData.map((data, index) => {
                return (
                    <div key={index} className="witcher_material-container" id={data.id}>
                        <img className="witcher_material-bg" src={data.img} alt={data.img}/>
                        <img className="witcher_material-title" src={data.name} alt={data.name}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Materials