import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <main className="main">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
