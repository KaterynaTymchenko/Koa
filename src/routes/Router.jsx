import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../routes/Login';
import IdeaList from './IdeaList';
import IdeaMaker from './IdeaMaker';
import Idea from './Idea';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={IdeaList} />
      <Route path="/create-idea" component={IdeaMaker} />
      <Route path="/ideasCards/:id" component={Idea} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Router;
