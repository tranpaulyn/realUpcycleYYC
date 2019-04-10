import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';

function Result(props) {
  const giphy = props.quizResult;
  if(giphy === 'Expert'){
    return 
  }
  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="quiz-result">
      <p className="quizResult">Your Result: {props.quizResult}</p> 
      <center><img class="Jake" src='https://media.giphy.com/media/HaC3m9r4JFjPi/giphy.gif' /></center>
      <p><br/><br/><center><Link to={'/learn'}><button type='submit' className="signup-pg-btn">Go Back</button></Link></center></p>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
