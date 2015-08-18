import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Main } from '../components';
import * as Actions from '../actions/LoginActions';
import { connect } from 'react-redux';

@connect(state => ({
  reports: state.reports
}))
export default class MainComponent extends Component {
  render() {

    const { reports, dispatch } = this.props;

    return (
      <Main { ...bindActionCreators(Actions, dispatch) } reports={reports} />
    );
  }
}
