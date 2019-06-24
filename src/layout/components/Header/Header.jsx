import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="headerTitle">
            <Link to="/">Idea`s generator</Link>
          </Typography>
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Menu
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
