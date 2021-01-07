import React from "react";

import { Container } from "./styles";

const DefaultModal: React.FC = ({ children, ...props }: any) => {
  return <Container {...props}>{children}</Container>;
};

export default DefaultModal;
