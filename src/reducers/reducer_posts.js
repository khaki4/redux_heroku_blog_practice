import mapKeys from 'lodash/mapKeys';
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = { ...state }
      // newState[post.id] = post
      // return newState
      
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}