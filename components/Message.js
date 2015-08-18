import React, { Component, addons } from 'react';
import { Alert, Button } from 'react-bootstrap';


export default class Message extends Component {

  static propTypes = {
    message: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { width: 150 };
  }


  render() {

    const { message } = this.props;
    let { width } = this.state;
    let CSSTransitionGroup = { addons };

    let style = {
      position: 'fixed', 
      top: 60,
      left: '50%',
      marginLeft: -width,
      width
    };

    if (message.message !== '')
      return <div style={style}>
        <Alert bsStyle='info' onDismiss={ () => this.props.dismiss() }>
          <p ref='textWidth'>{ message.message }</p>
        </Alert>
      </div> 
    else return null;
  }

}
