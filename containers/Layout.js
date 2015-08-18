import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/LoginActions';

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
    const { dispatcher } = this.props;
    return (
      <div>
        <Header { ...bindActionCreators(Actions, dispatch) } />
          { this.props.children }
        <Footer />
      </div>
    );
  }
}
