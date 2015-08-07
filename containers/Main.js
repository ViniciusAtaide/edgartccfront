import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import { Header, Footer } from '../components';
import * as Actions from '../actions/Actions';
import { Main } from '../components/Main';

export default class Main extends Component {
 render() {
    return (
      <Connector>
        <Main />
      </Connector>
    );
  }
}
