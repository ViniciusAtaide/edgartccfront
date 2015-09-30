import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { TransitionSpring } from 'react-motion';

export default class Message extends Component {

  static propTypes = {
    message: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { width: 230 };
  }

  render() {

    const { message } = this.props;
    let { width } = this.state;

    let displayMessage = message
      ? { opacity: { val: 1 }, top: { val: 55 }}
      : { opacity: { val: 0 }, top: { val: 0 }};

    return (
      <TransitionSpring endValue={ displayMessage } >
        {tweeningCollection => {
          let innerStyle = {
            opacity: tweeningCollection.opacity.val,
            top: tweeningCollection.top.val,
            left: '50%',
            position: 'absolute',
            marginLeft: -width / 2,
            width
          };


          return <Alert bsStyle='info' style={ innerStyle }>
            <center>{ message }</center>
          </Alert>;
          }
        }
      </TransitionSpring>
    );

  }

}
