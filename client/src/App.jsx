import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Add from './components/Add_item.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/add" component={Add} />
  <Route exact path="/dashboard" component={Dashboard} />
</Switch>
      </div>
    );
  }
}

export default App;