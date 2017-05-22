import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { RenderInput } from './RenderInput';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { RenderTextArea } from './RenderTextArea';

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
                component={RenderTextArea}
                rows="12" />
          </div>

          <button type="submit">Submit</button>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.title) {
    errors.categories = 'Enter categories';
  }

  if (!values.title) {
    errors.content = 'Enter some content';
  }

  return errors;
}

PostsNew = reduxForm({ form: 'PostsNewForm', validate })(PostsNew);

export default connect(null, { createPost })(PostsNew);
