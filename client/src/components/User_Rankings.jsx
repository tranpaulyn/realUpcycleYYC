import React, {Component} from 'react';
import "antd/dist/antd.css";
import axios from 'axios'
import { List, Avatar} from 'antd';

class Ranking extends Component {
    constructor(props) {
        super(props)
    this.state = {
      users: [],
      wards: [],
      loading: false,
      hasMore: true,
    }
}
    componentDidMount() {

        axios.get('api/v1/wards')
            .then(wards => {
                this.setState({
                    wards: wards.data
                })
            })
            .catch(error => console.log(error))

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
            <div className="testing">
            {this.state.users.map(user => {
                if(user.name === 'Connor') {
                    console.log(user)
                    return(
            <List itemLayout="horizontal" dataSource={this.state.users} renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">user {item.name}</a>}
                        description={<p>user {item.name} is in position {this.state.users.findIndex(x => x.name === item.name) + 1} out of 14 with {item.points} points.</p>}
                    />
                </List.Item>
            )}/>
        )
    }
})}
</div>
        )}
}

export default Ranking