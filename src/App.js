import React from 'react'
import './App.css';

import "./assets/font/TheWitcher.ttf";

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import WhatWitcher from './containers/whatWitcher/WhatWitcher';
import Stats from './components/stats/Stats';
import Materials from './containers/materials/Materials';
import Products from './containers/products/Products';
import Licensed from './containers/licensed/Licensed';
import Newsletter from './containers/newsletter/Newsletter';
import Footer from './containers/footer/Footer';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <WhatWitcher />
        <Stats />
        <Materials />
        <Products />
        <Licensed />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default App;