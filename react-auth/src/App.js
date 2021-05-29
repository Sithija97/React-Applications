import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "./StateProvder";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <StateProvider>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </StateProvider>
      </Router>
    </div>
  );
}

export default App;
