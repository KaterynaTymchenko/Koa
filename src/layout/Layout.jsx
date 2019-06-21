import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class Layout extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Layout;
