import React, {Component} from 'react';
import axios from 'axios'
import "antd/dist/antd.css";
import {Collapse, Icon} from 'antd';
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

class UserWasteList extends Component {
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

    deleteWasteItem(id){
        axios.delete('api/v1/user_waste_items/' + id)
            .then(items => {
                console.log(items)
                window.location.replace("/dashboard")
            })
            .catch(error => console.log(error))
    }

    render() {
        return(
          <div className='container'>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
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
                        <td className="table-row-name">{wasteItem.waste_name}</td>
                        <td>{wasteItem.points}</td>
                        <td>{wasteItem.type}</td>
                        <td> <button className="delete-btn"><DeleteFroever className="trash"/></button> </td>
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
                  if(wasteItem.garbage === true && wasteItem.compostable === false && wasteItem.recyclable === false){
                    return (<tr className="row-table">
                        <td className="table-row-name">{wasteItem.waste_name}</td>
                        <td>{wasteItem.points}</td>
                        <td>{wasteItem.type}</td>
                        <td> <button className="delete-btn"><DeleteFroever className="trash"/></button> </td>
                    </tr>)
                    }
                  }
                )}
                </table>
            </Panel>
          </Collapse>
        </div>
        )
    }
}

export default UserWasteList;

//1: How to send a popilated waste item in the list nt the id but full waste item object
//2: 