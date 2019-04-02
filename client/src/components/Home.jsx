import React, { Component } from 'react';
import ListsContainer from './ListsContainer';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
            <Link className='signuplink' to={'/signup'}>Signup</Link>
            <Link className='signuplink' to={'/dashboard'}>Login</Link>
        </header>
        <ListsContainer />
      </div>
    );
  }
}

export default Home;