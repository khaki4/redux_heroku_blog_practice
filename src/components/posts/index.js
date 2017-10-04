import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map'
import PostCreatModal from './PostAddButton';

import { loadPosts } from '../../reducers/post/index';

class PostIndex extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  renderPosts = () => {
    const { posts } = this.props
    if (!posts) return <div>Loading...</div>
    return map(posts, post => {
      return <li key={post.id}>{post.title}</li>
    })
  }
  render () {
    console.log(this.props.posts)
    return (
      <div>
        <h3>Post 목록</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <PostCreatModal />
      </div>
    )
  }
}

export default connect(
  state => ({ posts: state.dashboard.posts }),
  { loadPosts }
)(PostIndex)