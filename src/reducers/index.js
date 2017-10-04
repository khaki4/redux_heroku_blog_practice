import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './post/index'

const rootReducer = combineReducers({
  dashboard: PostsReducer,
  form: formReducer
});

export default rootReducer;