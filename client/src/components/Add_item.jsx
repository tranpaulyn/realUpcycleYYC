import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';
import "antd/dist/antd.css";
import './components.css'

class Add extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      waste_items: [],
      results: 'All Items'
    };
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
  

  updateSearch(event) {
    this.setState({search: event.target.value})
    if (event.target.value) {
      this.setState({results: 'Search Results'})
    } else {
      this.setState({results: 'All Items'})
    }
  }

  addWasteItem(waste_item_id){
    axios.post('api/v1/user_waste_items', { user_waste_item: { waste_item_id }})
        .then(items => {
            console.log(items)
            window.location.replace("/dashboard")
        })
        .catch(error => console.log(error))
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
  let filteredItems = this.state.waste_items.filter(
    (item) => {
      return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  )

  let resultsMessage = this.state.results

    return (
      <div>
        <div className="search-header-wrap">
        <header className="add-header">
        <h3 className="search-header"> Search and Add Item </h3>
          <Input className="search-input" placeholder="Search Items" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </header>
        </div>
       <div className="results-message">
         <h4>{resultsMessage}</h4>
        </div>
  
        <div className="lists-container">
                {filteredItems.map( item => {
                   return (
                       <div className="single-list">
                        <p className="item-name"><strong>{this.capitalize(item.name)}</strong>
                        <span className="item-type"><strong>Type: </strong>{this.capitalize(item.type_of_waste)} </span>
                        </p>
                        <p className="item-instructions"><strong>Special Instructions: </strong> {item.instructions}</p>
                        <p><Button type="primary" onClick={() => this.addWasteItem(item.id)}>Add</Button></p>
                      </div>
                   )
                })}
            </div>
      </div>
    );
  }
}

export default Add;