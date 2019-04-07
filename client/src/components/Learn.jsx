import React, { Component } from 'react';
import Footing from './Footer.jsx';
import TipList from './tiplist.jsx';
import './components.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo-header">
          <h1 className="reg-header">Upcycle</h1>
        </div>
        
        <img src='/planet-earth.png' alt='earthImage' className='earthImage'></img>
      
        <div className='bubble'>
          Remember the R&R&R rule Reduce Reuse and Recycle
        </div>
        
        <div className='resourcesTab'>
          <TipList />
        </div>
        
        <Footing />
        
      </div>
    );
  }
}

export default Home;