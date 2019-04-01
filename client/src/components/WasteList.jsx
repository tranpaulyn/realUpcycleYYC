import React, { Component } from 'react';
import axios from 'axios';

class WasteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waste_items: []
        }
    }

    componentDidMount() {
        axios.get('api/v1/waste_items')
        .then(items => {
            console.log(items)
            this.setState({
                waste_items: items.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="lists-container">
                {this.state.waste_items.map( item => {
                   return (
                       <div className="single-list">
                        <p><strong>Item: </strong>{item.name} </p>
                        <p><strong>Type: </strong>{item.type_of_waste} </p>
                        <p><strong>Special Instructions: </strong> {item.instructions}</p>
                        </div>
                   )
                })}
            </div>
        )
    }
}

export default WasteList;
