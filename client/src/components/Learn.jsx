import React, { Component } from 'react';
import Footing from './Footer.jsx';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-headers">
        </header>
        <div>
          <a><Link to='/quiz'>Test your recycle knowledge! (QUIZ)</Link></a>
          <div></div>
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>
          <div></div>
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Computers-and-computer-accessories.aspx'>Where to dispose of electronics</a>
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a> 
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Blue-cart-recycling/Blue-Cart-Recycling.aspx'>Find when your next garbage pickup date is</a>    
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Radioactive-waste.aspx'>Wanna know how to dispose of something so common as radioactive waste fam!?</a>          
          <div></div>          
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Default.aspx'>LMAO DONT GOT WHAT YOU NEED TO RECYCLE ON OUR WEBISTE EH!?</a>         
        </div>
        
        <Footing />
      </div>
    );
  }
}

export default Home;