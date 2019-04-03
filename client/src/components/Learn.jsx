import React, { Component } from 'react';

class Home extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the Learn route!</h1>
        </header>
        <div>
          <a target='_blank' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>Find a bottle depot near you</a>
        </div>
      </div>
    );
  }
}

export default Home;