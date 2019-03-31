import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert} from 'antd';

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
      </div>
    )
  }
}

export default Dashboard;