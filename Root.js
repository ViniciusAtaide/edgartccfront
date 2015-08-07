import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import renderRoutes from './router'; 

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const { history } = this.props;
    return (
      <Provider store={store}>
        { renderRoutes.bind(null, history) }
      </Provider>
    );
  }
}
