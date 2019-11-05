import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

//ReactDOM.render(<Home />, document.getElementById("app"));

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
