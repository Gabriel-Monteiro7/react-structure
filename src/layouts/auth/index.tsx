import React from "react";
import { injectIntl } from "react-intl";
import { Container } from "./styles";
const AuthThemes = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default injectIntl(AuthThemes);
