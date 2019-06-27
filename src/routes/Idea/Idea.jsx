import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../IdeaList/components/ideaItem.scss';

export default class IdeaItem extends Component {
  componentDidMount() {
    const { getDataIdeas } = this.props;
    getDataIdeas();
  }

  render() {
    const { id } = this.props.match.params;
    const url = `https://loremflickr.com/320/240?lock=${id}`;
    console.log(this.props);
    return (
      <Card className="ideaItem">
        <CardHeader />
        <CardContent>
          <CardMedia className="cardMedia" image={url} title="Cat" />
          <Typography className="paragraph" color="textSecondary">
            {this.props.idea.description}
          </Typography>
          <Typography color="textSecondary">Author:</Typography>
          <Typography color="primary">{this.props.idea.author}</Typography>
          <Typography color="textSecondary">{this.props.match.params.id}</Typography>
        </CardContent>
      </Card>
    );
  }
}
