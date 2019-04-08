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
            <div className="testing" >
            {this.state.users.map(user => {
                if(user.name === 'Connor') {
                    console.log(user)
                    return(
            <List itemLayout="horizontal" dataSource={this.state.users} renderItem={item => (
                <List.Item className='longline'>
                    <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: '#6d78e7' }} size={80} src={`/avatars/${this.state.users.findIndex(x => x.name === item.name) + 1}.png`} />}
                        title={<h4 className="lead-details"><strong>#{this.state.users.findIndex(x => x.name === item.name) + 1} {item.name}</strong> <span className="lead-points"> {item.points.toLocaleString()} points </span></h4>}
                        description={<p>Waste Diverted: {item.waste_diverted} KGs</p>}
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