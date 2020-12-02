import { Switch } from "react-router-dom";
import React from "react";
import Route from "./Route";
import Home from "~/pages/Home";
import Logon from "~/pages/Logon";

export default function Routes(props: any) {
  return (
    <Switch>
      <Route path="/" component={Logon} exact>
        {props.children}
      </Route>
      <Route path="/home" component={Home} exact isPrivate>
        {props.children}
      </Route>
    </Switch>
  );
}
