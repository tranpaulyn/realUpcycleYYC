import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import LearnIcon from "@material-ui/icons/LocalLibrary";
import LeaderboardIcon from "@material-ui/icons/Score";

const styles = {
  root: {
    width: 500
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
      >
        <BottomNavigationAction
          label="Dashboard"
          value="dashboard"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<ProfileIcon />}
        />
        <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Learn"
          value="learn"
          icon={<LearnIcon />}
        />
        <BottomNavigationAction
          label="Leaderboard"
          value="leaderboard"
          icon={<LeaderboardIcon />}
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
