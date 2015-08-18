import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { Message } from '../containers';

export default class Public extends Component {

  render() {
    let bg = {
      height: '100%',
      background: 'url(../../public/images/bgLogin.jpg) no-repeat center center fixed',
      backgroundSize: 'cover'
    };

    return (
      <div style={bg}>
        <Header onlyBrand={true}/>
        <Message />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
