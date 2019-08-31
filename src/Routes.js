import React from "react";
import { Route, Switch } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Example = () => (
  <div>
    <h1>Example</h1>
  </div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/example" component={Example} />
  </Switch>
);

export default Routes;
