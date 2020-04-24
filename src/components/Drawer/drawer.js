import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import TimelineIcon from '@material-ui/icons/Timeline';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  toggleButton: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    backgroundColor: 'white',
  }
});

export default function TemporaryDrawer() {
const classes = useStyles();
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  });



// Turn this into a button? Or, maybe just make icons constant, with a pop-out when you mouseover?
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    } 

    setState({ ...state, left: open });
  };

  const list = () => {
    const iconList = [<HomeIcon />, <PresentToAllIcon />, <TimelineIcon/>, <SendIcon />]
      return (      
    <div
      className={clsx(classes.list, {
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Portfolio', 'Resume', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{iconList[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )};

  return (
  
        <React.Fragment>
          <Button className={classes.toggleButton}

            onClick={toggleDrawer(true)}>Menu</Button>
          <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
  );
}
