import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
        <div>List of posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
