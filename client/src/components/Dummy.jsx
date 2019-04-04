import React, { Component } from 'react';
import UserList from './UserList';
import WasteList from './WasteList'
import Footing from './Footer.jsx';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello This info is from our DB</h1>
        </header>
        <UserList />
        <WasteList />
        <Footing />
      </div>
    );
  }
}

export default Home;