import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Login } from '../components';
import * as Actions from '../actions/LoginActions';

@connect(state => ({
  users: state.users,
  loginState: state.login
}))
export default class LoginComponent extends Component {
  render() {

    return (
      <Login { ...bindActionCreators(Actions, this.props.dispatch)} {...this.props} />
    );

  }
}
