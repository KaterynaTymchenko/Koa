import React, { Component } from 'react';

import ErrorMessage from '../_shared/ErrorMessage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <main className="main">{this.props.children}</main>
        <ErrorMessage />
        <Footer />
      </div>
    );
  }
}

export default Layout;
