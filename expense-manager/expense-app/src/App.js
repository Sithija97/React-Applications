import Home from './components/Home';
import Login from './components/Login';
import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import { auth } from './firebase';
import { UserContext } from './StateContext';

function App() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("onAuthStateChanged: signed in");
        //set current user as user
        setUser(auth.currentUser);;
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
            <Route path="/home" component={Home} />
            <Route path="/login" exact component={Login} />
            <Redirect from="/" to="login" exact component={Login} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
