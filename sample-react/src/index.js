import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './components/Root.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/style.css';

//ReactDOM.render(<Home />, document.getElementById("app"));

const singleSpa = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const bootstrap = [
    singleSpa.bootstrap
];

export const mount = [
    singleSpa.mount
];

export const unmount = [
    singleSpa.unmount
];
