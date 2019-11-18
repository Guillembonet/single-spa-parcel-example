import React from "react";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';

export default function Root() {
  return (
    <HashRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react_about">
            <About />
          </Route>
          <Route path="/react">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}