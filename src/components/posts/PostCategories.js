import React from 'react'
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

const NO_CATEGORY = '분류 없음'
const PostCategories = ({ posts }) => {
  if (!posts || (Array.isArray(posts) && posts.length < 1)) return null
  
  const uniqCategories = uniq(map(posts, (post) => {
    if (!post) return NO_CATEGORY
    return post.categories
  }))
  if (!uniqCategories) return null
  return (
    <div>
      {uniqCategories.map(item => {
        return <Link to={`/${item}`}>{item}</Link>
      })}
    </div>
  )
}

export default PostCategories