import React from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/LoginActions';

@connect(state => ({
  message: state.message
}))
export default class MessageContainer {
  render() {
    let { message, dispatch } = this.props;

    return (
      <Message message={message} { ...bindActionCreators(Actions, dispatch) }/>
    );
  }
}
