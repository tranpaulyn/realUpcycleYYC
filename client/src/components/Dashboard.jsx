import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';

const Panel = Collapse.Panel

function callback(key){
  console.log(key);
}

const text = `Who is the coolest of all the guys?
Why of course it the one the only CoolGuy69 aint no
other coolguys able to be a cooler guy.`

const genExtra = () => (
  <Icon
    type="plus"
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
)
class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello This is the Dashboard page</h1>
          <div className='container'>
          <h1>Collapseable Things</h1>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Recycle" key='1' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
            <Panel header="Compost" key='2' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
            <Panel header="Garbage" key='3' extra={genExtra()}>
              <div>{text}</div>
            </Panel>
          </Collapse>
        </div>
        </header>
      </div>
    );
  }
}

export default Dashboard;