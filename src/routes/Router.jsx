import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IdeaList from './IdeaList';
import IdeaMaker from './IdeaMaker';
import Idea from './Idea';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={IdeaList} />
      <Route path="/create-idea" component={IdeaMaker} />
      <Route path="/ideasCards/:id" component={Idea} />
    </Switch>
  );
}

export default Router;
