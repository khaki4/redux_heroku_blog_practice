import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashBoard from './components/posts/PostIndex'
import PostShow from './components/posts/PostShow'

export default () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route
            exact
            path="/:filter?"
            component={DashBoard}
          />
          <Route path="/posts/:id" component={PostShow} />
        </div>
      </Router>
    </div>
  )
}