import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CollabHub from '../ProjectCard/Projects/collabHub.js';
import Tossup from '../ProjectCard/Projects/tossup.js';
import ProjectCard from '../ProjectCard/projects.json'
import ParksQuiz from '../ProjectCard/Projects/quiz.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function PortfolioGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item s={12} m={6}>
          <Paper className={classes.paper}>
              <Tossup />
        </Paper>
        </Grid>
        <Grid item s={12} m={6}>
          <Paper className={classes.paper}>
              <CollabHub />
        </Paper>
        </Grid>
        <Grid item s={12} m={6}>
          <Paper className={classes.paper}>
              <ParksQuiz />
        </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
       </Grid>
    </div>
  );
}
