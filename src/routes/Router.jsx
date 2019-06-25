import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IdeaList from './IdeaList';
import IdeaMaker from './IdeaMaker';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={IdeaList} />
      <Route path="/create-idea" component={IdeaMaker} />
    </Switch>
  );
}

export default Router;
