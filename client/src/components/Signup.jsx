import React, { Component } from 'react';
import Link from 'react-router-dom';

class Signup extends Component {
  state = {
    email:'',
    ward:'',
    name:''
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hi!</h1>
          <h2 className="App-title">Let's start with the basics!</h2>
          <div>
                <div className='container'>
                <form  className='white' action='/dashboard' method='get'>
                    <div className="input-field">
                        <label htmlFor='name'>Name</label>
                        <input type='name' id='name' onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>
                    <div className="dd-wrapper">
                    <label htmlFor='ward'>Ward</label>
                        <select type='ward' id='ward' onChange={this.handleChange}>
                          <option>Ward 1</option>
                          <option>Ward 2</option>
                          <option>Ward 3</option>
                          <option>Ward 4</option>
                          <option>Ward 6</option>
                          <option>Ward 7</option>
                          <option>Ward 8</option>
                          <option>Ward 9</option>
                          <option>Ward 10</option>
                          <option>Ward 11</option>
                          <option>Ward 12</option>
                          <option>Ward 13</option>
                          <option>Ward 14</option>
                        </select>
                        Find your ward <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/citycouncil/Pages/FindYourCouncillor.aspx'>here</a>
                    </div>
                    <div className='input-field'>
                        <button type='submit' className='btn pink lighten-1 z-depth-0'>SignUp</button>
                    </div>
                </form>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Signup;