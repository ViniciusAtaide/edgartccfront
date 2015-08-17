import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'react-bootstrap';
import auth from '../auth';

export default class Main {
  static propTypes = {
    reports: PropTypes.array.isRequired,
    dispatch: PropTypes.object.isRequired
  };

  render() {
    const { reports } = this.props;

    var token = auth.getToken();

    let reportList = reports.map((report, i) => {
      return <p key={i}>{report}</p>
    });

    return (
      <Grid>
        { reportList }
      </Grid>
    );
  }
}
