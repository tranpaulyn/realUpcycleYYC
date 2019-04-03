import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Home extends Component {
  state = {
    size: 'large',
  };
  render() {
    const size = this.state.size;
    return (
      <div>
        <header>
          <h1 className="App-title">Hello Hiplyst!</h1>
            <Link to={'/signup'}><Button type="primary" shape="round" size={size}>Sign Up</Button></Link>
            <p/>
            <Link to={'/dashboard'}><Button type="primary" shape="round" size={size} ghost>Login</Button></Link>
        </header>
      </div>
    );
  }
}

export default Home;