import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert, Collapse, Icon} from 'antd';

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
    return(
      <div className="dashboard">

        <div className="profile">
          <Avatar size={192} icon="user" src="http://www.imfdb.org/images/7/7a/Ice_Cube-AK-74.jpg" alt="user-pic"/>
          <br/>
          <img className="badge-pic" src="https://pbs.twimg.com/media/B0GI7DuCcAAbxJ_.png" height="37" width="37" alt="user-badge"/>
          <span className="text-section">
            <p className="user-full-name">Ice Cube</p>
            <p className="diversion-statement">You've diverted 8 whale testicles from the landfill since registration!</p>
          </span>
        </div>

        <div className="progress-bars">

          <div className="column">
          <span className="level-column">
            <p>Level 69</p>
            </span>
          </div>

          <div className="column">
          <span className="points-column">
          <Progress type="dashboard" percent={69}/>
            <p className="points-meter">6969 points</p>
            </span>
          </div>

          <div className="column">
          <span className="neighbourhood-column">
            <p className="ranking-header">6 out of 9</p>
            <br/> 
            <p className="neighbourhood-meter">The Bronx</p>
            </span>
          </div>
        </div>
        <Alert
              message="10,000 POINTS!"
              type="success"
              closable=""
              afterClose=""
            />
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
      </div>
    )
  }
}

export default Dashboard;