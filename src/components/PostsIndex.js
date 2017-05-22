import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import  { Link }  from 'react-router-dom';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
        <div>
          <div>
            <Link to="/posts/new">Add some shit</Link>
          </div>
          List of posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
