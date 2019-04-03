import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert, Collapse, Icon} from 'antd';
import axios from 'axios'
import Application from './UserWasteList.jsx';

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

    return(
      
      <div className="dashboard">
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
                  
                    if (user.name === 'Johnny'){
                      let awardMessage = `Congratulations, you've been awarded ${user.award}`
               return (
        <div className="profile">
          <Avatar size={192} icon="user" src="http://www.imfdb.org/images/7/7a/Ice_Cube-AK-74.jpg" alt="user-pic"/>
          <br/>
          <img className="badge-pic" src={imgUrl} height="37" width="37" alt="user-badge"/>
          <span className="text-section">
            <p className="user-full-name">{user.name}</p>
            <p className="diversion-statement">You've diverted 8 whale testicles from the landfill since registration!</p>
          </span>
                <div className="progress-bars">

                <div className="column">
                <span className="level-column">
                  <p>Level 69</p>
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
                  <p className="ranking-header">6 out of 9</p>
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