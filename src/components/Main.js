import React, { PropTypes, Component } from 'react';
import {Grid} from 'react-bootstrap';

export default class Main extends Component {

  static propTypes = {
    reports: PropTypes.array.isRequired,
  };

  render() {
    const { reports } = this.props;

    const reportList = reports.map((report, i) => <p key={i}>{report}</p>);

    return (
      <Grid>
        { reportList }
      </Grid>
    );
  }
}
