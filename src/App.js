import React from 'react'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Signs from './components/signs/Signs';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Signs />
        <p>Who is Geralt</p>
        <p>Features</p>
        <p>Reviews</p>
        <p>Footer</p>
    </div>
  )
}

export default App;