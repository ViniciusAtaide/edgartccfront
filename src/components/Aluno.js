import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'react-bootstrap';

export default class Main {
  static propTypes = {
    reports: PropTypes.array.isRequired,
    dispatch: PropTypes.object.isRequired
  };

  render() {

    const { reports, actions } = this.props;

    return (
      <Grid>
        <p>Aluno</p> 
      </Grid>
    );
  }
}
