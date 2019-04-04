import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert} from 'antd';
import axios from 'axios'
import Application from './UserWasteList.jsx';
import Footing from './Footer.jsx';

class Dashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
          users: [],
          userWasteItems: [],
          wasteItems: [],
          wards: []
      }
  }
  componentDidMount() {
    axios.get('api/v1/users')
    .then(users => {
        this.setState({
            users: users.data
        })
        console.log(users.data)
    })
    .catch(error => console.log(error))

    axios.get('api/v1/wards')
    .then(wards => {
      this.setState({
        wards: wards.data
      })
      console.log(wards.data)
    })
    .catch(error => console.log(error))
  }

  render() {

    return(
      
      <div className="dashboard">
            <div className="logo-header">
              <h1 className="reg-header">Upcycle</h1>
            </div>
        {this.state.users.map( user => {
          let imgUrl;
          if (user.badge === 'Seedling') {
            imgUrl = ("/seed.png")
          } else if (user.badge === 'Sapling'){
            imgUrl = ("/seedling.png")
          } else if(user.badge === 'Tree'){
            imgUrl = ("/tinyleaf.png")
          } else if(user.badge === 'Wise Tree'){
            imgUrl = ("/tinytree.png")
          } else if(user.badge === 'Ancient Tree'){
            imgUrl = ("/tree.png")
          }

          if (user.name === 'Dan'){
            let awardMessage = `Congratulations, you've been awarded ${user.award}`
          return (
            
            <div className="profile">
              <Avatar size={192} icon="user" src="{user.uniqueAvatar}" alt="user-pic"/>
            <br/>
            <img className="badge-pic" src={imgUrl} height="45" width="45" alt="user-badge"/>
            <span className="text-section">
            <p className="user-full-name">{user.name}</p>
            <p className="diversion-statement">You've diverted 8 whale testicles from the landfill since registration!</p>
            </span>
                <div className="progress-bars">

                <div className="column">
                <span className="level-column">
                  <p>Level {user.level}</p>
                  </span>
                </div>
      
                <div className="column">
                <span className="points-column">
                <Progress type="dashboard" percent={(user.points % 1000)/10}/>
                  <p className="points-meter">{user.points} points</p>
                  </span>
                </div>
      
                <div className="column">
                <span className="neighbourhood-column">
                  <p className="ranking-header">{(this.state.wards.findIndex(x => x.name == user.ward) + 1)} out of 14</p>
                  <br/> 
                  <p className="neighbourhood-meter">Ward {user.ward}</p>
                  </span>
                </div>
              </div>
              <Alert
              message={awardMessage}
              type="success"
              closable=""
              afterClose=""
            />
            <Application />
            <Footing />

              </div>
)
                      }})}
      </div>
    )
  }
}

export default Dashboard;