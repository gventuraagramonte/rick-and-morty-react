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
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            exact
            component={Character}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/:id`}
            exact
            component={Character}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
