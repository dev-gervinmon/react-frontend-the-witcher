import React from 'react'
import './App.css';

import "./assets/font/TheWitcher.ttf";

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import WhatWitcher from './containers/whatWitcher/WhatWitcher';
import Stats from './components/stats/Stats';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <WhatWitcher />
        <Stats />
        <p>Materials</p>
        <p>Community</p>
        <p>Products</p>
        <p>Newsletter</p>
        <p>Footer</p>
    </div>
  )
}

export default App;