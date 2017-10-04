import mapKeys from 'lodash/mapKeys';
import { getPosts, createPost } from '../../service/postService';

// Actions
export const POST_FETCH = 'blog_heroku_api/posts/POST_FETCH'
export const POST_ADD = 'blog_heroku_api/posts/POST_ADD'
const MODAL_WINDOW_CHANGE = 'blog_heroku_api/posts/MODAL_WINDOW_CHANGE'

// Action Creators
export const fetchPosts = (posts) => ({type: POST_FETCH, payload: posts})
export const changeModalWindow = (isOpen) => ({ type: MODAL_WINDOW_CHANGE, payload: isOpen })
export const savePost = (post) => (dispatch) => {
  createPost(post)
    .then((res) => {
      dispatch({
        type: POST_ADD,
        payload: res
      })
      dispatch(changeModalWindow(false))
    })
}
export const loadPosts = () => (dispatch) => {
  getPosts()
    .then(posts => {
      dispatch(fetchPosts(posts))
    })
}

// Reducer
const initState = {
  posts: [],
  modal: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case POST_FETCH:
      return {
        ...state,
        posts: mapKeys(action.payload.data, 'id')
      }
    case POST_ADD:
      return {
        ...state,
        posts: {...state.posts, [action.payload.data.id]: {...action.payload.data}}
      }
    case MODAL_WINDOW_CHANGE:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.payload
        }
      }
    default:
      return state
  }
}
