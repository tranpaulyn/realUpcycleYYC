import React from "react";
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/AccountCircle";
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
        <BottomNavigationAction
          href='/dashboard'
          label="Dashboard"
          value="dashboard"
          icon={<HomeIcon id='footerIcon'/>}
          id='footerIcon'
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<ProfileIcon />}
          href='/dashboard'
          id='footerIcon'
        />
        <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} href="/add" 
          id='footerIcon'
          />
        <BottomNavigationAction
          label="Learn"
          value="learn"
          icon={<LearnIcon />}
          to='/learn'
          component={Link}
          id='footerIcon'
        />
        <BottomNavigationAction
          label="Leaderboard"
          value="leaderboard"
          icon={<LeaderboardIcon />}
          href='/leaderboard'
          id='footerIcon'
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
