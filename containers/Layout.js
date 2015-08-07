import React, { Component } from 'react';
import { Connector } from 'redux/react';

export default class Main extends Component {
	
  static propTypes = {
    children: React.PropTypes.object
  }
 
  render() {
  	return (
      <Header />
      	{ this.props.children }
      <Footer />
  	);
  }
}
