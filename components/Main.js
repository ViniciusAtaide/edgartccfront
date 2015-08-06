import React, { PropTypes } from 'react';
import Header from './Header';
import Blogpost from './Blogpost';
import Footer from './Footer';
import {Grid} from 'react-bootstrap';

export default class Main {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    let { blogposts } = this.props;

    blogposts = blogposts.map((post, i) =>
      <Blogpost key={i} post={post} index={i} />
    );

    return (
      <div style={styles.main}>
        <Header />
        <Grid>
          {blogposts}
        </Grid>
        <Footer />
      </div>
    );
  }
}

let styles = {
  main: {
    fontFamily: 'roboto, sans-serif'
  }
}
