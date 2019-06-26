import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './errorBoundary.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <i className="material-icons iconError">error</i>
          <Typography variant="h2" component="h2" color="primary">
            Something went wrong, please try again later!
          </Typography>
        </>
      );
    }
    return this.props.children;
  }
}
