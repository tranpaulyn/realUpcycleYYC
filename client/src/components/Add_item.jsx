import React, { Component } from 'react';
import axios from 'axios'

class Add extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      waste_items: []
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
  }

  render() {
  let filteredItems = this.state.waste_items.filter(
    (item) => {
      return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  )
    return (
      <div className="App">
        <header className="App-header">
        <h2> Search an Item </h2>
          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </header>

        <div className="lists-container">
                {filteredItems.map( item => {
                   return (
                       <div className="single-list">
                        <p><strong>Item: </strong>{item.name} </p>
                        <p><strong>Type: </strong>{item.type_of_waste} </p>
                        <p><strong>Special Instructions: </strong> {item.instructions}</p>
                        </div>
                   )
                })}
            </div>
      </div>
    );
  }
}

export default Add;