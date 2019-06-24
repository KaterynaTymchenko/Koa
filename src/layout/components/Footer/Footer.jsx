import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './footer.scss';

function Footer() {
  return (
    <AppBar position="static">
      <Toolbar>
        <footer className="footer">
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
          </Container>
          <Container className="footerIcons">
            <i className="material-icons">face</i>
            <i className="material-icons">grade</i>
            <i className="material-icons">language</i>
          </Container>
        </footer>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
