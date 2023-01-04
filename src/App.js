import React from 'react'
import './App.css';

import "./assets/font/TheWitcher.ttf";

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Signs from './components/signs/Signs';
import TheWitcher from './containers/thewitcher/TheWitcher';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Signs />
        <TheWitcher />
        <p>Features</p>
        <p>Reviews</p>
        <p>Footer</p>
    </div>
  )
}

export default App;