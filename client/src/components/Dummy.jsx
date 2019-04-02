import React, { Component } from 'react';
import UserList from './UserList';
import WasteList from './WasteList'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello THis info is from our DB</h1>
        </header>
        <UserList />
        <WasteList />
      </div>
    );
  }
}

export default Home;