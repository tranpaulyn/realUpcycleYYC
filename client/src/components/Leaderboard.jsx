import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Avatar, Button} from 'antd';
import axios from 'axios'
import Footing from './Footer.jsx'
import Ranking from './Rankings.jsx'
import UserRanking from './User_Rankings.jsx'

class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wards: [],
            users: [],
            toggleButton: true,
            text: 'User Ranking'

        }
        this.toggleButton = this.toggleButton.bind(this);
    }

    componentDidMount() {
        axios.get('api/v1/wards')
            .then(wards => {
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

        toggleButton(){
            this.setState({toggleButton: !this.state.toggleButton})
        }

    render() {

        return(
            <div className="leaderboard">
            <div className="logo-header">
              <h1 className="reg-header">Upcycle</h1>
            </div>
                {this.state.wards.map(ward => {

                    if (ward.id === 1 && this.state.toggleButton === true) {
                        return(
                            <div className="top-ward">
                                <Avatar id='leaderIcon' size={192} icon="user" src="/avatars/ward5.jpg" alt="ward 5 councillor"/>
                                <br/>
                                <p className="leader-statement">
                                Councillor George Cahal's Ward {this.state.wards[0].name} is leading the city!</p>
                                <p className="points-statement">With {this.state.wards[0].points} points, they are #1 - 
                                followed by Ward {this.state.wards[1].name} with
                                </p> <div className='pointsText'>{this.state.wards[1].points} points.</div>
                            </div>
                        )
                    } else if(ward.id === 1 && this.state.toggleButton === false) {
                        return(
                            <div className="top-ward">
                                <Avatar id="leaderIcon" size={192} icon="user" src="https://i.ytimg.com/vi/DVuUmTUYXrs/hqdefault.jpg" alt="squidward"/>
                                <br/>
                                <p className="leader-statement">
                                Hafiz is leading the users!</p>
                                <p className="points-statement">120000 With points, they are #1 - 
                                followed by </p><div className='pointsText'>Kat with 90890
                                points.</div>
                                <p>{this.state.users[1]}</p>
                            </div>
                        )
                    }
                })}
            <Button id="toggleButton" type='primary' onClick={this.toggleButton}>{this.state.toggleButton ? 'User Ranking' : 'Ward Ranking'}
            </Button>
            {(this.state.toggleButton) ?
            
                <Ranking />
            :
                <UserRanking />
                
    
            }
            
            <Footing />
            </div>
)}
            }
export default Leaderboard;