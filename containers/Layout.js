import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/LoginActions';

@connect(state => ({
  auth: state.auth
}))
export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Header />
          { this.props.children }
        <Footer />
      </div>
    );
  }
}
