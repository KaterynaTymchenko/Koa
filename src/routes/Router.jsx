import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/some-page" render={() => <div className="info">Content</div>} />
    </Switch>
  );
}

export default Router;
