import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexShrink: 0,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Idea`s generator</Link>
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            <Link to="/some-page">Login</Link>
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
