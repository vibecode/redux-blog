import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id)
        .then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
        <div>
          <Link to="/">Home</Link>
          <h3 className="post-title">{post.title}</h3>
          <h6 className="categories-title">Categories: {post.categories}</h6>
          <p>{post.content}</p>
          <button className="delete-post" onClick={this.onDeleteClick}>Delete post</button>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
