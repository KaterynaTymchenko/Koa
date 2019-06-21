import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainComponent from './MainComponent/MainComponent';

function Router() {
  return (
    <Switch>
      <Route exact component={MainComponent} path="/home" />
    </Switch>
  );
}

export default Router;
