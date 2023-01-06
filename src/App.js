import React from 'react'
import './App.css';

import "./assets/font/TheWitcher.ttf";

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import WhatWitcher from './containers/whatWitcher/WhatWitcher';
import Stats from './components/stats/Stats';
import Materials from './containers/materials/Materials';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <WhatWitcher />
        <Stats />
        <Materials />
        <p>Products</p>
        <p>Newsletter</p>
        <p>Footer</p>
    </div>
  )
}

export default App;