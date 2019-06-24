import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container className="footerContainer">
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
      </Container>
    </footer>
  );
}

export default Footer;
