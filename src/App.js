import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashBoard from './components/posts/index'

export default () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={DashBoard} />
        </div>
      </Router>
    </div>
  )
}