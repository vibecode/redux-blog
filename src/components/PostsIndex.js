import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import  { Link }  from 'react-router-dom';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
          <Link to={`posts/${post.id}`} key={post.id}>
            <li>
              <span>{post.categories}</span>
              <strong>{post.title}</strong>
            </li>
          </Link>
      )
    })
  }

  render() {
    return (
        <div>
          <div>
            <Link to="/posts/new">Add some shit</Link>
          </div>
          <h3>Posts</h3>
          <ul>
            {this.renderPosts()}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
