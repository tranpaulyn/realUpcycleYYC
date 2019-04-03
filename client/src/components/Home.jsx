import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

class Home extends Component {
  state = {
    size: 'large',
  };
  render() {
    return (
      <div className="home-bg">
        <header className="home">
          <h1 className="App-title">Upcycle</h1>
          <img className="hero-img" src="https://media0.giphy.com/media/etKPlfE85HW8udMMDl/giphy.gif"/>
            <p/>
            <Link to={'/signup'}><button className="signup-btn">SIGN UP</button></Link>
            <p/>
            <Link to={'/dashboard'}><button className="login-btn">LOGIN</button></Link>
        </header>
      </div>
    );
  }
}

export default Home;