import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from "./screens/Login.screen";
import { Dashboard } from "./screens/Dashboard.screen";
export const Nav = function App() {
  return (
    <Router>
      <div>
        <div style={{justifyContent: 'center',  display: 'flex', backgroundColor: 'grey'}}>
        <nav style={{flexDirection: 'row', backgroundColor: 'red', width: '25%', display: 'flex', justifyContent: 'space-between', padding: 10}}> 
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dahboard</Link>
              <Link to="/login">login</Link>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = ()=> {
  return <h2>Home Page</h2>;
}
