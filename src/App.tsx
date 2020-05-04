import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import loadable from './utils/loadable';
import './App.css';

const Layout = loadable(() => import(/* webpackChunkName: 'layout' */ './layout'));
const NotFound = loadable(() => import(/* webpackChunkName: '404' */ './views/error/404'))
const ServerError = loadable(() => import(/* webpackChunkName: '500' */ './views/error/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/login/index'))

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/index"></Redirect>
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/404" component={NotFound}></Route>
        <Route path="/500" component={ServerError}></Route>
        <Route component={Layout}></Route>
      </Switch>
    </Router>
  )
}

export default App;
