import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app'
import Artists from './components/artists'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Artists} />
    </Route>
  </Router>
);
