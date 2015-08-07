import { Router, Route } from 'react-router';
import { Layout, Aluno, Main } from './containers';
import React from 'react';


export default function routes(history) {
  return (
    <Router history={history}>
      <Route component={Layout}>
      	<Route path="/" component={Main} />
        <Route path="alunos" component={Aluno} /> 
	    </Route>
    </Router>
  );
}
