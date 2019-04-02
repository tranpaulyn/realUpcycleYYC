import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
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
            this.setState({
                wasteItems: items.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="lists-container">
            {this.state.userWasteItems.map( item => {
               return (
                   <div className="single-list">
                    {item.id} {item.user_id} {item.waste_item_id}
                    </div>
               )
            })}
            </div>
            
        )
    }
}

export default UserList;
