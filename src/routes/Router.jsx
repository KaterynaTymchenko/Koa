import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IdeaList from './IdeaList';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={IdeaList} />
      <Route path="/some-page" render={() => <div className="info">Content</div>} />
    </Switch>
  );
}

export default Router;
