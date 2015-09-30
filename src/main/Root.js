import React, { Component } from 'react';
import { Layout, Aluno, Main, Login, Public } from '../containers';
import Router, { Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from '../lib/configureStore';
import auth from '../lib/auth';

const store = configureStore();
const history = createBrowserHistory();

function redirect(state, transitionTo) {
  if (auth.getToken()) {
    transitionTo('/');
  }
}

function loginCheck(state, transitionTo) {
  if (!auth.getToken()) {
    transitionTo('login');
  }
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () =>
          <Router history={history}>
            <Route component={Layout} onEnter={ loginCheck.bind(this) }>
              <Route path="/" component={Main}/>
              <Route path="alunos" component={Aluno}/>
            </Route>
            <Route component={Public} onEnter={ redirect.bind(this) }>
              <Route path="login" component={Login} />
            </Route>
          </Router>
        }
      </Provider>
    );
  }
}
