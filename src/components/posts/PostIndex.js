import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import map from 'lodash/map'
import { List } from 'semantic-ui-react'
import PostCreatModal from './PostAddButton';
import PostCategories from './PostCategories'
import { loadPosts, getVisiblePosts } from '../../reducers/post/index';

class PostIndex extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  renderPosts = () => {
    const { posts } = this.props
    if (!posts) return <div>Loading...</div>
    return map(posts, post => {
      return (
        <List.Item key={post.id}>
          <List.Content>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </List.Content>
        </List.Item>
      )
    })
  }
  render () {
    console.log(this.props.originalPosts)
    return (
      <div>
        <h3>Post 목록</h3>
        <List divided verticalAlign='middle' size="large">
          {this.renderPosts()}
        </List>
        <PostCreatModal />
        <PostCategories
          posts={this.props.originalPosts}
        />
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    posts: getVisiblePosts(state.dashboard.posts, ownProps.match.params.filter),
    originalPosts: state.dashboard.posts,
  }),
  { loadPosts }
)(PostIndex)