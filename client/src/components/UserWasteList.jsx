import React, {Component} from 'react';
import axios from 'axios'
import "antd/dist/antd.css";
import {Collapse, Icon} from 'antd';
import {Link} from 'react-router-dom'
import './components.css'

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

    render() {
        return(
<div className='container'>
          <Collapse defaultActiveKey={['1']} onChange={callback}>

            <Panel header="Recycle" key='1' extra={genExtra()}>
          <div><span className='moveTextLeft'>Name</span><span className='middleText'> Points</span><span className='moveTextRight'> Type</span></div>

                {this.state.wasteItems.map(wasteItem => {
                  if(wasteItem.recyclable === true){
                    return (<div>
                      <hr></hr>
                    <div><span className='moveTextLeft'>{wasteItem.name}</span><span className='middleText'> {wasteItem.points}</span><span className='moveTextRight'> {wasteItem.type_of_waste}</span></div>
                        <div><b>{wasteItem.instructions}</b></div>
                    </div>
                            
                      )
                }})
            }
            </Panel>

            <Panel header="Compost" key='2' extra={genExtra()}>
          <div><span className='moveTextLeft'>Name</span><span className='middleText'> Points</span><span className='moveTextRight'> Type</span></div>

                {this.state.wasteItems.map(wasteItem => {
                  if(wasteItem.compostable === true){
                    return (<div>
                      <hr></hr>
                    <div><span className='moveTextLeft'>{wasteItem.name}</span><span className='middleText'> {wasteItem.points}</span><span className='moveTextRight'> {wasteItem.type_of_waste}</span></div>
                        <div><b>{wasteItem.instructions}</b></div>
                    </div>
                            
                      )
                }})
            }            </Panel>

            <Panel header="Garbage" key='3' extra={genExtra()}>
            <div><span className='moveTextLeft'>Name</span><span className='middleText'> Points</span><span className='moveTextRight'> Type</span></div>

                {this.state.wasteItems.map(wasteItem => {
                  if(wasteItem.garbage === true && wasteItem.compostable === false && wasteItem.recyclable === false){
                    return (<div>
                      <hr></hr>
                    <div><span className='moveTextLeft'>{wasteItem.name}</span><span className='middleText'> {wasteItem.points}</span><span className='moveTextRight'> {wasteItem.type_of_waste}</span></div>
                        <div><b>{wasteItem.instructions}</b></div>
                    </div>
                            
                      )
                }})
            }
            </Panel>

          </Collapse>
        </div>
        )
    }
}

export default UserWasteList;

//1: How to send a popilated waste item in the list nt the id but full waste item object
//2: 