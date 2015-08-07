import React, { Component } from 'react';
import { Connector } from 'redux-react';
import { Aluno } from "../components";
export default class Aluno extends Component {
  render() {
    return (
    	<Connector>
	    	<Aluno />
    	</Connector>
    );
  }
}
