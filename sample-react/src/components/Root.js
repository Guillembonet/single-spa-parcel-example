import React from "react";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import ParcelPage from './ParcelPage.js';

//export default function Root() {

export default class Root extends React.Component{

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
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
            <Route path="/react_parcel_page">
              <ParcelPage />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}