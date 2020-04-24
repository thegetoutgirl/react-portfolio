import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import collabHubImg from './Screenshots/collabHub.png';
import "../projectCard.css";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CollabHub() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="collabHub"
        // subheader="icons here"
      />
      <CardMedia
        className={classes.media}
        image= {collabHubImg}
        title="collabHub Screenshot"
      />
      <CardContent>
        <p><Button variant="contained" color="primary" className="card-btn" href="#contained-buttons"> <a href="https://collab-hub.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        App Link</a>
        </Button>   <Button variant="contained" color="primary" href="#contained-buttons" className="card-btn"> <a href="https://github.com/thegetoutgirl/collabHub" target="_blank" rel="noopener noreferrer">
        Github Repo</a>
      </Button>
      </p>
      </CardContent>
      <CardActions>
      {/* disableSpacing */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          An app to connect developers in their area for collaborations. MySQL database with Sequelize ORM, Handlebars templates, and PassportJS for user authentication.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
