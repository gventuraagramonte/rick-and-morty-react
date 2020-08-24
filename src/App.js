import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./nprogress.css";
import "./App.css";
import GlobalStyle from "./global-styles";
import Character from "./character";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" exact component={Character} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
