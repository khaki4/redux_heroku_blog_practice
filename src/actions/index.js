import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PAPERCUT1234'

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`)
  
  return {
    type: FETCH_POSTS,
    payload: request // redux-promise: action을 payload에 담는다.
  }
}

export const createPost = (value, callback) => {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, value)
    .then(() => callback())
  
  return {
    type: CREATE_POST,
    payload: request
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  
  return {
    type: FETCH_POST,
    payload: request
  }
}

export const deletePost = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())
  
  return {
    type: DELETE_POST,
    payload: id
  }
}