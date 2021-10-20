import * as React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/user/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
