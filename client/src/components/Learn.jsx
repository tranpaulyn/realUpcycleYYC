import React, { Component } from 'react';
import Footing from './Footer.jsx';
import TipList from './tiplist.jsx';
// import earthImage from './planet-earth.png';
class Home extends Component {
  render() {
    return (
      <div className="App">
                  <div className="logo-header">
              <h1 className="reg-header">Upcycle</h1>
            </div>
        <header className="App-headers">
        </header>
        <img src='/planet-earth.png' alt='earthImage' className='earthImage'></img>
      <div className='bubble'>Fuel your recycling habits with the latest science and hand-picked by the carp team</div>
        <div className='resourcesTab'>
          
          <TipList />
       
        </div>
        <Footing />
      </div>
    );
  }
}

export default Home;