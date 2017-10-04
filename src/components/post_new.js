import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions';


import '../style/style.css'

class PostsNew extends Component {
  renderField = (field) => {
    const { meta: { touched, error }} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }
  render() {
    // reduxform 에서부터 내려온 props.handleSubmit
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title For Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Catergories"
            name="catergories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="sumit" className="btn btn-primary">Summit</button>
          <Link to="/" className="btn btn-danger">Cancle</Link>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (Array.isArray(values.title) && values.title.length < 3) {
    errors.title = 'title must be at least 3 characters!'
  }
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title!"
  }
  if (!values.catergories) {
    errors.catergories = "Enter a catergories!"
  }
  if (!values.content) {
    errors.content = "Enter a content!"
  }
  
  return errors
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostsNew)
)