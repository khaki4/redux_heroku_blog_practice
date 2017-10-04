import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'
import postsReducer from './reducers/post/index'

const reducer = combineReducers({
  dashboard: postsReducer,
  form: formReducer,
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

