import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get('api/v1/users')
        .then(users => {
            console.log(users)
            this.setState({
                users: users.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="lists-container">
                {this.state.users.map( user => {
                   return (
                       <div className="single-list">
                        <p>{user.level} {user.badge} {user.award} {user.name} {user.points} {user.ward_id} {user.waste_diverted} KG</p>
                        </div>
                   )
                })}
            </div>
        )
    }
}

export default UserList;
