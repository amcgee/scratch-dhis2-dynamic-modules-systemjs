import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { AppWrapper } from './App.component'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  errorBoundary() {
    return <div>Error</div>;
  },
  rootComponent: AppWrapper,
  parcelCanUpdate: true
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
export const update = lifecycles.update;

export const name = "Example Application"

// export function getFilmsComponent() {
//   return import(
//     /* webpackChunkName: "films-component" */ "./films/films.component.js"
//   );
// }