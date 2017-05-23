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
          <li className="posts-list-item">
            <Link to={`posts/${post.id}`} key={post.id} className="posts-list-item__link">
              <h2 className="post-list-item__title">{post.title}</h2>
              <div className="post-list-item__categories">{post.categories}</div>
            </Link>
          </li>
      )
    })
  }

  render() {
    return (
        <div>
          <h3 className="posts-title">Latest posts:</h3>
          <ul className="posts-list">
            {this.renderPosts()}
          </ul>
          <Link to="/posts/new" className="new-post-button">New post</Link>
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
