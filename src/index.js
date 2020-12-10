import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/home/Home';
import { Edit } from './pages/products/Edit';
import { View } from './pages/products/View';
import { Add } from './pages/products/Add';
import { history } from "./history";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/add"} component={Add} />
        <Route exact path={"/edit"} component={Edit} />
        <Route exact path={"/view"} component={View} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
