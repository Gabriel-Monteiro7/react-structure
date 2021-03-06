import React from "react";

import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "~/pages/Home";
import Register from "~/pages/Register";
import Logon from "~/pages/Logon";

function Routes({ children }: any) {
  return (
    <Switch>
      <Route path="/" component={Logon} exact>
        {children}
      </Route>
      <Route path="/home" component={Home} exact isPrivate>
        {children}
      </Route>
      <Route path="/register" component={Register} exact isPrivate>
        {children}
      </Route>
    </Switch>
  );
}
export default Routes;
