import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import './ideaItem.scss';

export default function IdeaItem(props) {
  return (
    <Card className="ideaItem">
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className="cardAvatar">
            K
          </Avatar>
)}
        title={props.title}
      />
      <CardContent>
        <Typography color="textSecondary">{props.description}</Typography>
        <Typography color="textSecondary">Author:</Typography>
        <Typography color="primary">{props.author}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton />
      </CardActions>
    </Card>
  );
}
