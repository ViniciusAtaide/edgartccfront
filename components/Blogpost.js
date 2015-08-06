import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Blogpost {
  static propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
    const { index, post } = this.props;

    return (
      <Row>
        <Col md={6} mdOffset={3}>
          <h2>{post.title}</h2>
          <h5>{post.intro}</h5>
          <p>{post.body}</p>
        </Col>
      </Row>
    );
  }
}

