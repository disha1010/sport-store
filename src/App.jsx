import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

export default () => (
  <Router>
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/shoe" component={Show} />
    </div>
  </Router>
);
