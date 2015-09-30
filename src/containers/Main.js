import React from 'react';
import { Main } from '../components';
import { connect } from 'react-redux';

class MainContainer extends React.Component {

  static propTypes = {
    reports: React.propTypes.array.isRequired,
  };
  render() {
    return (
      <Main reports={this.props.reports}/>
    );
  }
}

export default connect(
  (state) => ({reports: state.reports})
)(MainContainer);
