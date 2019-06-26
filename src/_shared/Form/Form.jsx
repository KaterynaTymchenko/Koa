import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import SignupSchema from '../../utils/validationCreateIdea';
import CustomTextField from './components/CustomTextField';
import './form.scss';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <Typography variant="h4" component="h4">
          Create New Idea:
        </Typography>
        <Formik
          initialValues={{ title: '', description: '', author: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            this.props.postDataIdea(values);
            actions.setSubmitting(false);
            this.props.history.push('/');
          }}
          render={props => (
            <form className="form-container" onSubmit={props.handleSubmit}>
              <Field name="title" component={CustomTextField} />
              <Field name="description" component={CustomTextField} />
              <Field name="author" component={CustomTextField} />
              <Button type="submit" variant="contained" color="secondary">
                Send
                <Icon>send</Icon>
              </Button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Form;
