import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  renderPosts = () => {
    return map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }
  render () {
    console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts }
)(PostIndex)