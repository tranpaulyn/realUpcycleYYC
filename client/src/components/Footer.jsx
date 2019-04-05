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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
        id='footer'
        showLabels
      >
      <Link to='/dashboard'>
        <BottomNavigationAction
          label="Dashboard"
          value="dashboard"
          icon={<HomeIcon id='footerIcon'/>}
          id='footerIcon'
        /></Link>
        <Link to='/add'>
        <BottomNavigationAction label="Add" value="add" icon={<AddIcon />}
          id='footerIcon'
          /></Link>
        <Link to='/learn' label='Learn' value='learn'>
        <BottomNavigationAction
          label="Learn"
          value="learn"
          icon={<LearnIcon />}
          component={Link}
          id='footerIcon'
        /></Link>
        <Link to='/leaderboard'>
        <BottomNavigationAction
          label="Leaderboard"
          value="leaderboard"
          icon={<LeaderboardIcon />}
          id='footerIcon'
        />
        </Link>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
