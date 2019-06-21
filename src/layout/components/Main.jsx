import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography component="div" style={{ height: '100vh', textAlign: 'center' }}>
          Hello, world!
        </Typography>
        {this.props.children}
      </Container>
    );
  }
}

export default Main;
