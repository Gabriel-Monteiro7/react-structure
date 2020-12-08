import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
// import { Typography, Switch } from "@material-ui/core";
import { Container, Title } from "./styles";
import { useIntl } from "react-intl";
import Form from "~/components/FormRegister";

import { schema, fields, initialValues } from "./data";

function Register() {
  const intl = useIntl();
  const options = ["login.button.register", "login.button.login"];

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
