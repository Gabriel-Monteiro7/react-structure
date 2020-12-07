import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
// import { Typography, Switch } from "@material-ui/core";
import { Container, Title } from "./styles";
import { useIntl } from "react-intl";
function ApplicationPreview() {
  const intl = useIntl();
  return (
    <Container>
      <Title>{intl.formatMessage({ id: "homepage.title" })}</Title>
    </Container>
  );
}

export default ApplicationPreview;
