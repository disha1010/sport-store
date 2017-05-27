import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

export default () => (
  <Router>
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/products/:category/:subCategory" component={List} />
        <Route exact path="/products/:productId" component={Show} />
        <Redirect from="/" to="/products/running/shoes" />
      </Switch>
    </div>
  </Router>
);
