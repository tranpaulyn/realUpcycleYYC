import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/ChromeReaderMode';
import ArrowIcon from '@material-ui/icons/ChevronRight';
import './components.css'


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class TipList extends Component {
    render() {

        return (
    <List component="nav" className='resourceLinks'>
    <ListItemText><p className="resource-title">Resources</p></ListItemText>
    <div className='dottedLine'></div>
        <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon  />
        <ListItemText inset primary="Find a bottle depot near you" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Computers-and-computer-accessories.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Where to dispose of electronics" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Blue-cart-recycling/Blue-Cart-Recycling.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Find when your next garbage pickup date is" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Radioactive-waste.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Proper disposal of radioactive waste" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/What-goes-where/Default.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Any item not listed here?" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Garbage-collection-information/Residential-services/Household-chemical-drop-off-program/Household-Hazardous-Waste-Drop-off-Program.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Where to drop off household hazardous waste products?" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Landfill-information/Landfill-Locations-and-Hours.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Landfill hours and locations in Calgary" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Resources-for-educators/Resources-for-Educators.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Waste and Recycling Education Resource" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Tire-recycling/Tire-Recycling.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Tire Recycling" />
        <ArrowIcon />
      </ListItem>
      </a>
      <div className='dottedLine'></div>
      <a target='_blank' rel='noopener noreferrer' href='http://www.calgary.ca/UEP/WRS/Pages/Recycling-information/Residential-services/Recycling-depots/Recycling-Depots.aspx'>
      <ListItem button>
        <ListItemIcon>
        </ListItemIcon>
        <BookIcon />
        <ListItemText inset primary="Community recycling depot locations" />
        <ArrowIcon />
      </ListItem>
      </a>
    </List>        );
    }

}

export default TipList