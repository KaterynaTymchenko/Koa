import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';
import './App.css';
import './_shared/styles/reset.scss';
import ErrorBoundary from './_shared/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
