import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@dr/dr-component-mobile/dist/dr-component-mobile.css';
import './index.css';
import Text from './Text';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo7 from './Demo7';
import Demo8 from './Demo8';

ReactDOM.render(<Router>
  <Switch>
  <Route exact path="/" component={Text} />
    <Route exact path="/demo1" component={Demo1} />
    <Route exact path="/demo2" component={Demo2} />
    <Route exact path="/demo3" component={Demo3} />
    <Route exact path="/demo4" component={Demo4} />
    <Route exact path="/demo5" component={Demo5} />
    <Route exact path="/demo6" component={Demo6} />
    <Route exact path="/demo7" component={Demo7} />
    <Route exact path="/demo8" component={Demo8} />
  </Switch>
</Router>, document.getElementById('root'));
