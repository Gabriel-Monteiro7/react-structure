import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
// import { Typography, Switch } from "@material-ui/core";
import { Container, Title } from "./styles";
import { useIntl } from "react-intl";
function Register() {
  const intl = useIntl();
  return (
    <Container>
      <Title>{"Register"}</Title>
    </Container>
  );
}

export default Register;
