import { Formik, Field } from 'formik';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CustomTextField from '../../_shared/Form/components/CustomTextField';

import './idea.scss';

export default class IdeaItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
    };
  }

  componentDidMount() {
    const { getDataIdeas } = this.props;
    getDataIdeas();
  }

  handleEdit() {
    this.setState(state => ({
      ...state,
      edit: false,
    }));
  }

  render() {
    const { id } = this.props.match.params;
    const url = `https://loremflickr.com/320/240?lock=${id}`;
    let button;
    let title;
    let description;
    let media;
    let form;
    if (this.state.edit) {
      button = (
        <Button
          onClick={() => {
            this.handleEdit();
          }}
        >
          <i className="material-icons buttonIdea">create</i>
        </Button>
      );
      title = <CardHeader title={this.props.idea.title} />;
      description = (
        <Typography className="paragraph" color="textSecondary">
          {this.props.idea.description}
        </Typography>
      );
      media = <CardMedia className="cardMedia" image={url} title="Cat" />;
    } else {
      form = (
        <div className="form">
          <Typography variant="h5" component="h5">
            Edit Idea
          </Typography>
          <CardMedia className="cardMedia" image={url} title="Cat" />
          <Formik
            initialValues={{
              title: this.props.idea.title,
              description: this.props.idea.description,
              author: this.props.idea.author,
            }}
            onSubmit={(values, actions) => {
              this.props.updateDataIdea(this.props.idea.id, values);
              actions.setSubmitting(false);
              this.props.history.push('/');
            }}
            render={props => (
              <form className="form-container" onSubmit={props.handleSubmit}>
                <Field name="title" component={CustomTextField} />
                <Field name="description" component={CustomTextField} />
                <Field name="author" component={CustomTextField} />
                <Button type="submit">Save</Button>
              </form>
            )}
          />
        </div>
      );
    }
    return (
      <Card className="idea">
        {title}
        <CardContent>
          {media}
          <Container className="infoBox">
            {description}
            {form}
          </Container>
          {button}
          <Button
            onClick={() => {
              this.props.deleteDataIdea(this.props.idea.id);
              this.props.history.push('/');
            }}
          >
            <i className="material-icons buttonIdea">delete</i>
          </Button>
        </CardContent>
      </Card>
    );
  }
}
