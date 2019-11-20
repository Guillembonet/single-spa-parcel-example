import React from "react";
import Home from './Home.js';

//export default function Root() {

export default class Root extends React.Component{

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <Home />
    );
  }
}