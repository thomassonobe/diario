import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  const [auth, setAuth] = React.useState(null)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home {... props} auth={auth} setAuth={setAuth}/>} />
        <Route exact path="/login" render={(props) => <Login {... props} auth={auth} setAuth={setAuth}/>} />
        <Route exact path="/signin" render={(props) => <Signin {... props} auth={auth} setAuth={setAuth}/>} />
        <Route exact path="/dashboard" render={(props) => <Dashboard {... props} auth={auth} setAuth={setAuth}/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;