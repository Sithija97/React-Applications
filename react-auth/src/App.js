import "./App.css";
import { useContext, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "./StateContext";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
   useEffect(() => {
     console.log("in app.js user: ", user);
     auth.onAuthStateChanged(function (user) {
       if (user) {
         // User is signed in.
         console.log("onAuthStateChanged: signed in");
         //console.log("user", user);
         history.push('/home')

         //set current user as user
         setUser(auth.currentUser);
       } else {
         // No user is signed in.
         console.log("onAuthStateChanged: No user ");
         history.push('/login')
       }
     });
   }, [auth, user]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" exact component={Login} />
          <Redirect from="/" to="login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
