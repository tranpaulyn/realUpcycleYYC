import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Add from './components/Add_item.jsx';
import Dashboard from './components/Dashboard.jsx';
import Learn from './components/Learn.jsx';
import withStyles from './components/Footer.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Quiz from './QuizApp';
import NotFound from './NotFound'
import './components/components.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
  render() {
    return (

      <Router>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
              >
<Switch location={location}>
  <Route exact path="/" component={Home} />
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/add" component={Add} />
  <Route exact path="/dashboard" component={Dashboard} />
  <Route exact path="/Learn" component={Learn} />
  <Route exact path="/Footer" component={withStyles} />
  <Route exact path="/Leaderboard" component={Leaderboard} />
  <Route exact path="/quiz" component={Quiz} />
  <Route component={NotFound} />
</Switch>
</CSSTransition>
          </TransitionGroup>
        )} />
</Router>

    );
  }
}

export default App;