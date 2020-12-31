import React from "react";
import { Route, Redirect } from "react-router-dom";

import DefaultLayout from "~/layouts/default";
import AuthLayout from "~/layouts/auth";
import SnackBar from "~/components/SnackBar";

import { Theme } from "~/theme";
import { Translator } from "~/providers/translator";

import { store } from "~/store";
import history from "~/service/history";



function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: any) {
  const state: any = store.getState();
  const { signed }: any = state.auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
      <SnackBar />
    </>
  );
}

export default Theme(Translator(RouteWrapper));
