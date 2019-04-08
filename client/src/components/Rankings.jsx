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
          console.log(wards.data)
        this.setState({
          wards: wards.data
        })
    })
    .catch(error => console.log(error))

    axios.get('api/vi/users')
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
        {this.state.wards.map(ward => {
          if(ward.name === 1) {
            return(
              <List
              itemLayout="horizontal"
              bordered={false}
              dataSource={this.state.wards}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size={80} src={`/leaderboard/${this.state.wards.findIndex(x => x.name === item.name) + 1}.png`} />}
                    title={<h4 className="lead-details"><strong>Ward {item.name}</strong> <span className="lead-points"> {item.points.toLocaleString()} points </span></h4>}
                    description={<p>Waste Diverted: {item.total_weight} KGs</p>}
                  />
                </List.Item>
              )}/>
            )
          }
        })}
      </div>
    )
  }
}

export default Ranking