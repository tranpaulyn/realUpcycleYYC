import React, { Component } from 'react';
import { Progress } from 'antd';

class Signup extends Component {
  state = {
    email:'',
    ward: '',
    name:'',
    progress: 0
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
handleBlur = (e) => {
  console.log(this.state)
  var progress = 0  
  if(this.state.name !== ''){
      progress += 35
    } if(this.state.email !== ''){
      progress += 35
    } if(e.target.value === 'ward1'){
      progress += 35
    }
    this.setState({progress: progress})
  // if(e.target.id === "name") {
  //   this.setState({progress: (this.state.progress + 33.33)})
  // } if(e.target.id === "email") {
  //   this.setState({progress: (this.state.progress + 33.33)})
  // } if(e.target.id === "ward") {
  //   this.setState({progress: (this.state.progress + 35.36)})
  // } if(e.target.id === "chooseward" && e.target.value === "" && this.state.progress >= 0) {
  //   this.setState({progress: (this.state.progress - 33.33)})
  // }if(e.target.id === "name" && e.target.value === "" && this.state.progress >= 0) {
  //   this.setState({progress: (this.state.progress - 33.33)})
  // }if(e.target.id === "email" && e.target.value === "" && this.state.progress >= 0) {
  //   this.setState({progress: (this.state.progress - 33.33)})
  // } if(this.state.progress === true && this.state.progress === false && this.state.progress < 0){
  //   this.setState({progress: 0})
  // }
}
// Ask question of: how do i access an input only once if i type something once the bar should go up once
// if else the input text box is empty then remove only 33% once only
  render() {
    return (
      <div className="App">
        <header className="App-header">
    <Progress percent={this.state.progress} showInfo={false} />
          <h1 className="App-title">Hi!</h1>
          <h2 className="App-title">Let's start with the basics!</h2>
          <div>
                <div className='container'>
                <form  className='white' action='/dashboard' method='get'>
                    <div className="input-name">
                        <label htmlFor='name'>Name</label>
                        <input className='text-name' type='name' onBlur={this.handleBlur} id='name' onChange={this.handleChange}></input>
                    </div>

                    <div className="input-email">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={this.handleBlur} className='text-email' type='email' id='email' onChange={this.handleChange}></input>
                    </div>
                    <div className="dd-wrapper">
                    <label htmlFor='ward'>Ward</label>
                        <select onChange={this.handleBlur} className='input-wrapper' type='ward' id='ward'>
                          <option value='chooseward' className="chooseward">Choose Ward</option>                         
                          <option value='ward1'>Ward 1</option>
                          <option value='ward1'>Ward 2</option>
                          <option value='ward1'>Ward 3</option>
                          <option value='ward1'>Ward 4</option>
                          <option value='ward1'>Ward 6</option>
                          <option value='ward1'>Ward 7</option>
                          <option value='ward1'>Ward 8</option>
                          <option value='ward1'>Ward 9</option>
                          <option value='ward1'>Ward 10</option>
                          <option value='ward1'>Ward 11</option>
                          <option value='ward1'>Ward 12</option>
                          <option value='ward1'>Ward 13</option>
                          <option value='ward1'>Ward 14</option>
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