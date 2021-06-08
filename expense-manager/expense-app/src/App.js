import Home from "./components/Home";
import Login from "./components/Login";
import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { auth } from "./firebase";
import { UserContext } from "./StateContext";
import PrivateRoute from './PrivateRoute';

function App() {
  const { value, value5 } = useContext(UserContext);
  const [user, setUser] = value;
  const [isLoggedIn, setIsLoggedIn] = value5;
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("onAuthStateChanged: signed in");
        //set current user as user
        setUser(auth.currentUser);
        //console.log("user", user);
        history.push("/home");
      } else {
        // No user is signed in.
        console.log("onAuthStateChanged: No user ");
        history.push("/login");
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute exact path="/home" exact component={Home} />
            <Redirect from="/" to="login" exact component={Login} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
