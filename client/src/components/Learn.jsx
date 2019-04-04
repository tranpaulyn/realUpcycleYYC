import React, { Component } from 'react';
import Footing from './Footer.jsx';

class Home extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-headers">
        </header>
        <div>
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>
          <div></div>
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Computers-and-computer-accessories.aspx'>Where to dispose of electronics</a>
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>       
        </div>
        <Footing />
      </div>
    );
  }
}

export default Home;