import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProxyRedirect from './ProxyRedirect';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:component/:username/:password" render={(props) => <ProxyRedirect {...props} />} />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/404" render={props => <div> <h1> Page Not Found </h1> </div>}></Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
