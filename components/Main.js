import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'react-bootstrap';

export default class Main {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {

    return (
      <Grid>
        <p>Maine</p>
      </Grid>
    );
  }
}

let styles = {
  main: {
    fontFamily: 'roboto, sans-serif'
  }
}
