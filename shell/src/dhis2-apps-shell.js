import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Shell } from './shell.component'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  errorBoundary() {
    return <div>Error</div>;
  },
  rootComponent: Shell,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

// export function getFilmsComponent() {
//   return import(
//     /* webpackChunkName: "films-component" */ "./films/films.component.js"
//   );
// }