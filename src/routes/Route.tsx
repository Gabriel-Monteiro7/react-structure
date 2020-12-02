import React from "react";
import { Route, Redirect } from "react-router-dom";

import DefaultLayout from "~/layouts/default";
import AuthLayout from "~/layouts/auth";

import { store } from "~/store";

import { Theme } from "~/theme";
import { Translator } from "~/providers/translator";

function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: any) {
  // const { signed } = store.getState().auth;
  const signed = true;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }
  const Layout = signed ? DefaultLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Theme(Translator(RouteWrapper));
