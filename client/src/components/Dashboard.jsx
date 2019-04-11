import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Progress, Alert, Button, Icon, Collapse} from 'antd';
import axios from 'axios'
import Footing from './Footer.jsx';
import {Link} from 'react-router-dom'
import './components.css'
import DeleteFroever from '@material-ui/icons/DeleteForever'

const Panel = Collapse.Panel

function callback(key){
  console.log(key);
}

const genExtra = () => (
  <Link to='/add' className='linkcolorchange'>
    <Icon type="plus" />
  </Link>
)

class Dashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
          users: [],
          userWasteItems: [],
          wasteItems: [],
          wards: [],
          toDashboard: false
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

    axios.get('api/v1/wards')
    .then(wards => {
      this.setState({
        wards: wards.data
      })
      console.log(wards.data)
    })
    .catch(error => console.log(error))

    axios.get('api/v1/user_waste_items')
        .then(items => {
            this.setState({
                userWasteItems: items.data
            })
        })
        .catch(error => console.log(error))

        axios.get('api/v1/waste_items')
        .then(items => {
          console.log(items.data)
            this.setState({
                wasteItems: items.data
            })
        })
        .catch(error => console.log(error))
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

deleteWasteItem(toDeleteId){
axios.delete('api/v1/user_waste_items/' + toDeleteId)
  .then(items => {
    axios.get('api/v1/user_waste_items')
    .then(items => {
        this.setState({
            userWasteItems: items.data
        })
    })
    axios.get('api/v1/users')
    .then(users => {
        this.setState({
            users: users.data
        })
    })
  })
}

  render() {

    return(
      
      <div className="dashboard">
            <div className="logo-header">
              <h1 className="reg-header">Upcycle</h1>
            </div>
        {this.state.users.map( user => {
          let imgUrl = "";
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
            let awardMessage = `Congratulations, you've earned ${user.award}!`
            let wasteDiverted = (user.waste_diverted/24).toFixed(2);

            let points = user.points;
            let stringPoints = points.toLocaleString();

          return (
            
            <div className="profile">
              <Avatar style={{ backgroundColor: '#66b9ea' }} size={150} icon="user" src='/avatars/12.png' alt="user-pic"/>
              <br/>
              <img className="badge-pic" src={imgUrl} height="50" width="50" alt="user-badge"/>
              <p className="user-full-name">
                Hi, {user.name}!
              </p>
              <p className="diversion-statement">
                You've diverted {user.waste_diverted} KGs of waste from the landfill! 
              <br/> 
                That's equivalent to {wasteDiverted} beaver(s)!
              </p>
              
              <div className="progress-bars">

                <div className="column">
                  <p className="db-level">LEVEL</p>
                  <p className="user-level">{user.level}</p>
                </div>
      
                <div className="column">
                  <Progress strokeColor={'#41cd8c'} type="dashboard" percent={(user.points % 1000)/10}/>
                </div>
      
                <div className="column">
                  <p className="db-level">POINTS</p>
                  <p className="user-points">{stringPoints}</p>
                </div>

              </div>
              <Alert className="award-alert" message={awardMessage} type="success"/>
              <p><br/></p>
              <Button.Group>
                <Button value="large">
                  <Icon type="left" />
                  Last Week
                </Button>
                <Button value="large">
                Week of April 7, 2019
                </Button>
                <Button value="large">
                  Next Week
                  <Icon type="right" />
                </Button>
              </Button.Group>
              <div className="pick-up-date">
              <p><br/><strong>Your Next Green and Blue Cart Pickup</strong>
              <br/>April 12, 2019</p>
              <p><strong>Black Cart Pickup</strong>
              <br/>April 25, 2019</p>
              </div>

 <div className='waste-container'>
        <Collapse defaultActiveKey={['1', '2', '3']} onChange={callback}>
        <Panel header="Recycle" key='1' extra={genExtra()}>
        <table className="item-table">
          <tr>
            <th className="table-row-title">Item</th>
            <th>Points</th>
            <th>Type</th>
            <th>Remove</th>
            </tr>
            {this.state.userWasteItems.map(wasteItem => {
                    console.log(wasteItem.id)
                  if(wasteItem.recyclable){
                    return (<tr className="row-table">
                        <td className="table-row-name">{this.capitalize(wasteItem.waste_name)}</td>
                        <td>{wasteItem.points}</td>
                        <td>{this.capitalize(wasteItem.type)}</td>
                        <td> <button className="delete-btn" onClick={() => this.deleteWasteItem(wasteItem.id)}><DeleteFroever className="trash"/></button> </td>
                    </tr>)
                    }
                  }
                )}
                </table>
            </Panel>

            <Panel header="Compost" key='2' extra={genExtra()}>
            <table className="item-table">
                  <tr>
                      <th className="table-row-title">Item</th>
                      <th>Points</th>
                      <th>Type</th>
                      <th>Remove</th>
                  </tr>
                {this.state.userWasteItems.map(wasteItem => {
                  if(wasteItem.compostable){
                    return (<tr className="row-table">
                        <td className="table-row-name">{this.capitalize(wasteItem.waste_name)}</td>
                        <td>{wasteItem.points}</td>
                        <td>{this.capitalize(wasteItem.type)}</td>
                        <td> <button className="delete-btn" onClick={() => this.deleteWasteItem(wasteItem.id)}><DeleteFroever className="trash"/></button> </td>
                    </tr>)
                    }
                  }
                )}
                </table>
            </Panel>

            <Panel header="Garbage" key='3' extra={genExtra()}>
            <table className="item-table">
                  <tr>
                      <th className="table-row-title">Item</th>
                      <th>Points</th>
                      <th>Type</th>
                      <th>Remove</th>
                  </tr>
                {this.state.userWasteItems.map(wasteItem => {
                  if(wasteItem.garbage){
                    return (<tr className="row-table">
                        <td className="table-row-name">{this.capitalize(wasteItem.name)}</td>
                        <td>{wasteItem.points}</td>
                        <td>{this.capitalize(wasteItem.type)}</td>
                        <td> <button className="delete-btn" onClick={() => {this.deleteWasteItem(wasteItem.id)}}><DeleteFroever className="trash"/></button> </td>
                    </tr>)
                    }
                  }
                )}
                </table>
            </Panel>
          </Collapse>
        </div>
              
              <Footing />
            </div>
          )
          }
        }
        )
        }
      </div>
    )
  }
}

export default Dashboard;