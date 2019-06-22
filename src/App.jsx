import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Router';
import Layout from './layout/Layout';
import './App.css';
import './_shared/styles/reset.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
