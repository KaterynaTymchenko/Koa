import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Form from '../../_shared/Form/Form';

import './ideaMaker.scss';

export default class IdeaMaker extends Component {
  render() {
    const { postDataIdea, history } = this.props;
    return (
      <>
        <Button variant="contained" color="secondary" className="goBackButton">
          <Link to="/">
            <i className="material-icons">reply</i>
            Go Back
          </Link>
        </Button>
        <Form postDataIdea={postDataIdea} history={history} />
      </>
    );
  }
}
