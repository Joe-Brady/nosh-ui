import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Example } from "./components/pages";

/****  Code splitting example: ****/

// import Loadable from "react-loadable";
// import { ComponentLoading } from "./components/molecules";

// const Example = Loadable({
//   loader: () =>
//     import(
//       "./components/pages/Example/Example" /* webpackChunkName: 'page__Example' */
//     ),
//   loading: ComponentLoading
// });

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/example" component={Example} />
  </Switch>
);

export default Routes;
