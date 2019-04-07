import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import LearnIcon from "@material-ui/icons/LocalLibrary";
import LeaderboardIcon from "@material-ui/icons/Score";
import { Link } from 'react-router-dom'

const styles = {
  root: {
    width: 500,
  }
};

class Footer extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} id='footer' showLabels>

        <Link to='/dashboard'>
        <BottomNavigationAction icon={<HomeIcon id='footerIcon'/>} id='footerIcon'/>
        <p className="footer-label">Dashboard</p>
        </Link>

        <Link to='/add'>
        <BottomNavigationAction icon={<AddIcon />} id='footerIcon'/>
        <p className="footer-label">Add</p>
        </Link>

        <Link to='/learn'>
        <BottomNavigationAction icon={<LearnIcon />} id='footerIcon' />
        <p className="footer-label">Learn</p>
        </Link>

        <Link to='/leaderboard'>
        <BottomNavigationAction icon={<LeaderboardIcon />} id='footerIcon' />
        <p className="footer-label">Leaderboard</p>
        </Link>

      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
