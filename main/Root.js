import React, { Component, PropTypes } from 'react';
import { thunk } from '../middleware/thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import renderRoutes from './router';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {

    const { history } = this.props;

    return (
      <Provider store={ store }>
        { renderRoutes.bind(null, history) }
      </Provider>
    );
  }
}
