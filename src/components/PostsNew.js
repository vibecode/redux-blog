import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { RenderInput } from './RenderInput';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { RenderTextArea } from './RenderTextArea';
import  { Link }  from 'react-router-dom';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(props) {
    this.props.createPost(props)
        .then(() => {
          this.props.history.push('/');
        })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form className="post-form" onSubmit={handleSubmit(this.onSubmit)}>
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
                className="post-input"
                name="categories"
                component={RenderInput}
                type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <Field
                className="post-input"
                name="content"
                component={RenderTextArea}
                rows="12" />
          </div>

          <button type="submit" className="button">Submit</button>
          <Link to="/" >Cancel </Link>
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
