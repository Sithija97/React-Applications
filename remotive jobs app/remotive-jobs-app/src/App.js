import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigater from "./components/Navigater";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <Navigater />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Redirect from="/" to="home" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
