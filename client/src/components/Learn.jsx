import React, { Component } from 'react';
import { Collapse, Icon, Select } from 'antd';
import Popup from "reactjs-popup";
class Home extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the Learn route!</h1>
        </header>
        <div>
        <Popup trigger={<button> Tip of the DAY</button>} position="right center">
    <div>Coolguy69 was here</div>
  </Popup>
        </div>
      </div>
    );
  }
}

export default Home;