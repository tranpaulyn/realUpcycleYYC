import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert} from 'antd';
import axios from 'axios'
import Application from './UserWasteList.jsx';

class Dashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
          users: [],
          userWasteItems: [],
          wasteItems: []
      }
  }
  componentDidMount() {
    axios.get('api/v1/users')
    .then(users => {
        this.setState({
            users: users.data
        })
    })
    .catch(error => console.log(error))
  }

  render() {

    let avatars = ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png', '/avatars/4.png', '/avatars/5.png',
    '/avatars/6.png', '/avatars/7.png', '/avatars/8.png', '/avatars/9.png', '/avatars/10.png', '/avatars/11.png', '/avatars/12.png',
    '/avatars/13.png', '/avatars/14.png', '/avatars/15.png', '/avatars/16.png', '/avatars/17.png', '/avatars/18.png', '/avatars/19.png', '/avatars/20.png',
    '/avatars/21.png', '/avatars/22.png', '/avatars/23.png', '/avatars/24.png', '/avatars/25.png', '/avatars/26.png', '/avatars/27.png', '/avatars/28.png',
    '/avatars/29.png', '/avatars/30.png', '/avatars/31.png', '/avatars/32.png', '/avatars/33.png', '/avatars/34.png', '/avatars/35.png',
    '/avatars/36.png', '/avatars/37.png', '/avatars/38.png', '/avatars/39.png', '/avatars/40.png', '/avatars/41.png',
    '/avatars/42.png']

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

          if (user.name === 'Connor'){
            let awardMessage = `Congratulations, you've been awarded ${user.award}`
            let uniqueAvatar = avatars[42 % 1]
            console.log(user.waste_diverted)
            let wasteDiverted = (user.waste_diverted/24).toFixed(2)
          return (
            
            <div className="profile">
              <Avatar style={{ backgroundColor: '#66b9ea' }} size={192} icon="user" src={uniqueAvatar} alt="user-pic"/>
            <br/>
            <img className="badge-pic" src={imgUrl} height="50" width="50" alt="user-badge"/>
            <p className="user-full-name">Hi, {user.name}!</p>
            <p className="diversion-statement">You've diverted {user.waste_diverted} KGs. <br/> That's equivalent to {wasteDiverted} beaver(s)!</p>
                <div className="progress-bars">

                <div className="column">
                  <p className="db-level">LEVEL</p>
                  <p className="user-level">{user.level}</p>
                </div>
      
                <div className="column">
                <span className="points-column">
                <Progress strokeColor={'#41cd8c'} type="dashboard" percent={(user.points % 1000)/10}/>
                  <p className="points-meter">{user.points} points</p>
                  </span>
                </div>
      
                <div className="column">
                <span className="neighbourhood-column">
                  <p className="ranking-header">6 out of 14</p>
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
              </div>
                       )
                      }})}
      </div>
    )
  }
}

export default Dashboard;