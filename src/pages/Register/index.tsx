import React, { useState, useEffect, useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
// import { Typography, Switch } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import { Container, Title } from "./styles";
import { useIntl } from "react-intl";
import Form from "~/components/FormRegister";

import { schema, fields } from "./data";

function Register() {
  const { state }: any = useLocation();

  const intl = useIntl();
  const options = ["login.button.register", "login.button.login"];

  const initialValues = useMemo(() => {
    if (state) return { ...state };
    return {
      name: "",
      description: "",
    };
  }, [state]);

  return (
    <Container>
      <Title>{"Register"}</Title>
      <Form
        schema={schema}
        fields={fields}
        initialValues={initialValues}
        button={options[0]}
      ></Form>
    </Container>
  );
}

export default Register;
