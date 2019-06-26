import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IdeaItem from './components/IdeaItem';

import './ideasList.scss';

export default class IdeaList extends Component {
  componentDidMount() {
    const { getDataIdeas } = this.props;

    if (!this.props.ideas.length) {
      getDataIdeas();
    }
  }

  render() {
    const { ideas, deleteDataIdea } = this.props;
    return (
      <>
        <Button variant="contained" color="secondary" className="createButton">
          <Link to="/create-idea">Create Idea</Link>
        </Button>
        <ul className="ideaList">
          {ideas.map(idea => (
            <IdeaItem key={idea.id} {...idea} deleteIdea={deleteDataIdea} />
          ))}
        </ul>
      </>
    );
  }
}
