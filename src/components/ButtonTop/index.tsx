import React from "react";

import { Container, Icon, Tooltip } from "./styles";
import { useIntl } from "react-intl";
export default function ButtonTop({ positionTop }: any) {
  const intl = useIntl();
  return positionTop > 200 ? (
    <Tooltip title={intl.formatMessage({id:"button.top"})}>
      <Container
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Icon />
      </Container>
    </Tooltip>
  ) : (
    <></>
  );
}
