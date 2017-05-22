import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { RenderInput } from './RenderInput';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create a new post</h3>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field
              name="title"
              component={RenderInput}
              type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="categories">Categories</label>
            <Field
                name="categories"
                component={RenderInput}
                type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <Field
                name="content"
                component="textarea"
                rows="12" />
          </div>

          <button type="submit">Submit</button>
        </form>
    );
  }
}

PostsNew = reduxForm({ form: 'PostsNewForm' })(PostsNew);

export default connect(null, { createPost })(PostsNew);
