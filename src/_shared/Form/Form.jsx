import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SignupSchema from '../../utils/validationCreateIdea';
import './form.scss';

const CustomTitle = ({ field }) => (
  <TextField
    {...field}
    className="formField"
    id="filled-with-placeholder"
    label="Title"
    placeholder="Enter Title"
    margin="normal"
    variant="filled"
  />
);

const CustomDescription = ({ field }) => (
  <TextField
    {...field}
    className="formField"
    id="filled-with-placeholder"
    label="Description"
    placeholder="Enter description"
    margin="normal"
    variant="filled"
  />
);

const CustomAuthor = ({ field }) => (
  <TextField
    className="formField"
    {...field}
    id="filled-with-placeholder"
    label="Author"
    placeholder="Enter Author"
    margin="normal"
    variant="filled"
  />
);

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
              <Field className="formField" name="title" component={CustomTitle} />
              <ErrorMessage component="div" name="title" />
              <Field className="formField" name="description" component={CustomDescription} />
              <ErrorMessage component="div" name="description" />
              <Field className="formField" name="author" component={CustomAuthor} />
              <ErrorMessage component="div" name="author" />
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
