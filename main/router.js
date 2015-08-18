import { Router, Route } from 'react-router';
import { Layout, Aluno, Main, Login, Subscribe, Public } from '../containers';
import React from 'react';
import { routeLocationDidUpdate } from '../actions/LoginActions';
import auth from '../lib/auth';

export default function renderRoutes(history) {

  return (
    <Router history={history}>
      <Route component={Layout} onEnter={ loginCheck.bind(this) }>
        <Route path="/" component={Main}/>
        <Route path="alunos" component={Aluno}/>
      </Route>
      <Route component={Public} onEnter={ redirect.bind(this) }>
        <Route path="login" component={Login} />
      </Route>
    </Router>
  );
}

function redirect(state, transition) {
  if (auth.getToken()) {
    transition.to('/');
  }
}

function loginCheck(state, transition) {
  if (!auth.getToken()) {
    transition.to('login');
  }
}