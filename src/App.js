import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value = {{userInfo : [loggedInUser, setLoggedInUser], cartInfo: [cart, setCart]}}>
      <Router>
          <Switch>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
