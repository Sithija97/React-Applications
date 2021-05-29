import "./App.css";
import { useContext, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserProvider, UserContext } from "./StateContext";

function App() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {

    user.isLogin === false ?  history.push('/') : history.push('/home')
  }, [user]);
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      </div>

  );
}

export default App;
